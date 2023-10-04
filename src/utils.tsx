export const dropdownVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  },
};

export function formatNumberWithCommas(number: number) {
  if (number === undefined || number === null) {
    return '';
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
