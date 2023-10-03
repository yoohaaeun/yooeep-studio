/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        productColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
      },
    },
  },
  plugins: [],
};
