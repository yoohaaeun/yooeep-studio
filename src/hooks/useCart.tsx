import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addOrUpdateToCart,
  getCart,
  IProduct,
  removeFromCart,
} from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
  const authContext = useAuthContext();
  const uid = authContext?.uid || '';
  const queryClient = useQueryClient();

  const cartQuery = useQuery<any, Error, IProduct[]>(
    ['carts', uid || ''],
    () => getCart(uid),
    { enabled: !!uid }
  );

  const addOrUpdateItem = useMutation<void, Error, IProduct>(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', uid]);
      },
    }
  );

  const removeItem = useMutation<void, Error, string>(
    (id) => removeFromCart(uid, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', uid]);
      },
    }
  );

  return { cartQuery, addOrUpdateItem, removeItem };
}
