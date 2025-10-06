/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    "@tailwindcss/postcss": {},   // ✅ Nouveau plugin correct
    autoprefixer: {},
  },
};
