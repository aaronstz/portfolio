/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/pages/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/pages/_app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      safelist: ['animate-[tada-2s-ease-in-out]']
    },
    colors: {
      ...colors,
      primary: colors.rose,
      secondary: colors.indigo,
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
