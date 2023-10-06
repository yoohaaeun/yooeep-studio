import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return <>{products && <span> ({products.length})</span>}</>;
}
