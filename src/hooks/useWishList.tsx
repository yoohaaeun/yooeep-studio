import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addToWishList,
  getWishList,
  IProduct,
  removeFromWishList,
} from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useWishList() {
  const authContext = useAuthContext();
  const uid = authContext?.uid || '';
  const queryClient = useQueryClient();

  const wishListQuery = useQuery<any, Error, IProduct[]>(
    ['wish_list', uid || ''],
    () => getWishList(uid),
    { enabled: !!uid }
  );

  const isInWishList = (id: string) => {
    return wishListQuery.data?.some((product) => product.id === id);
  };

  const addWishItem = useMutation<void, Error, IProduct>(
    (product) => addToWishList(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['wish_list', uid]);
      },
    }
  );

  const removeWishItem = useMutation<void, Error, string>(
    (id) => removeFromWishList(uid, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['wish_list', uid]);
      },
    }
  );

  return { wishListQuery, isInWishList, addWishItem, removeWishItem };
}
