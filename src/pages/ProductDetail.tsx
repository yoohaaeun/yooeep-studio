import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formatNumberWithCommas } from '../utils';

export default function ProductDetail() {
  const [selected, setSelected] = useState<string | null>(null);
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  return (
    <section>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <p>KRW {formatNumberWithCommas(price)}</p>
        <p>size</p>
        {options.map((item: string, index: number) => (
          <button onClick={() => setSelected(item)} key={index}>
            {item}
          </button>
        ))}
        <button>add to cart</button>
      </div>
    </section>
  );
}
