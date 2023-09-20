import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface ProductFormData {
  image: FileList;
  title: string;
  price: number;
  category: string;
  description: string;
  options: string;
}

export default function NewProduct() {
  const { handleSubmit, register, watch } = useForm<ProductFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>();

  const image = watch('image');

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
  };

  return (
    <section className='pt-20'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='file' placeholder='이미지' {...register('image')} />
        {imagePreview && <img src={imagePreview} alt='Product Preview' />}

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
