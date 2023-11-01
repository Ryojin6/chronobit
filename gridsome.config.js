const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `ChronoBit`,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/icon.svg',
    touchicon: './src/icon.svg',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: ['gridsome-plugin-robots', '@gridsome/plugin-sitemap'],
};
