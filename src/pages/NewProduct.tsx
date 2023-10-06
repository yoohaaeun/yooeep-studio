import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { addNewProduct, ProductFormData } from '../api/firebase';
import { uploadImage } from '../api/uploader';

export default function NewProduct() {
  const { handleSubmit, register, watch, reset } = useForm<ProductFormData>();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const image = watch('image');
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setFile(file);
    }
  }, [image]);

  const addProduct = useMutation<void, Error, ProductFormData>(
    (product: ProductFormData) =>
      uploadImage(file!).then((url) => addNewProduct(product, url)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        setSuccess('🧚🏻‍♀️ 제품이 등록 되었습니다');
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
        reset();
        setFile(null);
        setIsUploading(false);
      },
      onError: (error) => {
        console.error('제품 추가 오류:', error);
      },
    }
  );

  const onSubmit = (product: ProductFormData) => {
    setIsUploading(true);
    addProduct.mutate(product);
  };

  return (
    <div className='min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-10 py-28'>
      {file && (
        <section className='w-80 md:w-96'>
          <img
            src={URL.createObjectURL(file)}
            alt='Product Preview'
            className='rounded-xl'
          />
        </section>
      )}
      <section className='w-80 md:w-96'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
          {success && (
            <p className='w-fit h-10 p-2 bg-slate-100 font-semibold'>
              {success}
            </p>
          )}
          <input
            type='file'
            placeholder='이미지'
            required
            {...register('image')}
            className='cursor-pointer'
          />

          <input
            id='title'
            type='text'
            placeholder='제품명'
            required
            {...register('title')}
            className='border border-solid border-bl h-10 px-2'
          />

          <input
            type='number'
            placeholder='가격'
            required
            {...register('price')}
            className='border border-solid border-black h-10 px-2'
          />

          <select
            placeholder='카테고리'
            {...register('category')}
            className='border border-solid border-black h-10 px-2 bg-transparent outline-none cursor-pointer'
          >
            <option value='Outer'>Outer</option>
            <option value='Knitwear'>Knitwear</option>
            <option value='Tops'>Top</option>
            <option value='Dresses'>Dresses</option>
            <option value='Accessories'>Accessories</option>
          </select>

          <input
            type='text'
            placeholder='제품 설명'
            required
            {...register('description')}
            className='border border-solid border-black h-10 px-2'
          />

          <input
            type='text'
            placeholder='옵션들(콤마(,)로 구분)'
            required
            {...register('options')}
            className='border border-solid border-black h-10 px-2'
          />

          <button
            type='submit'
            disabled={isUploading}
            className='mt-4 border border-solid border-black w-fit p-2'
          >
            {isUploading ? <p>업로드중...</p> : <p>제품 등록하기</p>}
          </button>
        </form>
      </section>
    </div>
  );
}
