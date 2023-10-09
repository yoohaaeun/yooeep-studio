/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        navColumns: '1fr 1fr minmax(7rem, 1fr) 1fr 1fr',
      },
    },
  },
  plugins: [],
};
