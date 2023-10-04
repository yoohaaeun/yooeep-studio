import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const authContext = useAuthContext();
  const uid = authContext?.uid || '';

  const { data: products } = useQuery(['carts'], () => getCart(uid), {
    enabled: !!uid,
  });

  return <>{products && <span> ({products.length})</span>}</>;
}
