import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { addNewProduct, ProductFormData } from '../api/firebase';
import { uploadImage } from '../api/uploader';

export default function NewProduct() {
  const { handleSubmit, register, watch, reset } = useForm<ProductFormData>();
  const [file, setFile] = useState<File | null>(null);

  const image = watch('image');
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setFile(file);
    }
  }, [image]);

  const onSubmit = (product: ProductFormData) => {
    if (file) {
      uploadImage(file)
        .then((url) => {
          return addNewProduct(product, url);
        })
        .then(() => {
          reset();
          setFile(null);
        })
        .catch((error) => {
          console.error('제품 추가 오류:', error);
        });
    }
  };

  return (
    <section className='pt-40'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='file' placeholder='이미지' {...register('image')} />
        {file && <img src={URL.createObjectURL(file)} alt='Product Preview' />}

        <input
          type='text'
          placeholder='제품명'
          required
          {...register('title')}
        />

        <input
          type='number'
          placeholder='가격'
          required
          {...register('price')}
        />

        <input
          type='text'
          placeholder='카테고리'
          required
          {...register('category')}
        />

        <input
          type='text'
          placeholder='제품 설명'
          required
          {...register('description')}
        />

        <input
          type='text'
          placeholder='옵션들(콤마(,)로 구분)'
          required
          {...register('options')}
        />

        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}
