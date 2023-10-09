import { ChangeEvent } from 'react';

interface ProductOptionsProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

export default function ProductOptions({
  selected,
  setSelected,
  options,
}: ProductOptionsProps) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);

  return (
    <div className='flex flex-col mb-8'>
      <label className='text-sm font-medium text-gray-400 mb-2'>SIZE</label>
      <select
        id='select'
        className='w-1/2 py-2.5 px-1 flex-1 border border-black outline-none bg-transparent cursor-pointer'
        onChange={handleSelect}
        value={selected}
      >
        <option disabled>{DEFAULT_OPTION}</option>
        {options &&
          options.map((option: string, index: number) => (
            <option key={index}>{option}</option>
          ))}
      </select>
    </div>
  );
}

const DEFAULT_OPTION = '- [필수] Select Option -';
