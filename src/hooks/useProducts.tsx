import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addNewProduct,
  getProducts,
  IProduct,
  ProductFormData,
} from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery<IProduct[]>(['products'], getProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation<
    void,
    Error,
    { product: ProductFormData; url: string }
  >(({ product, url }) => addNewProduct(product, url), {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  return { productsQuery, addProduct };
}
