import { useQuery } from '@tanstack/react-query';
import { getProducts, IProduct } from '../api/firebase';

export default function useProducts() {
  const productsQuery = useQuery<IProduct[]>(['products'], getProducts, {
    staleTime: 1000 * 60,
  });

  return { productsQuery };
}
