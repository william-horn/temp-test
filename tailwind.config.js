/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      textColor: {
        theme: {
          base: 'var(--text-color-base)',
          muted: 'var(--text-color-muted)',
          inverted: 'var(--text-color-inverted)'
        }
      },

      backgroundColor: {
        theme: {
          base: 'var(--bg-color-base)',
          muted: 'var(--bg-color-muted)',
          inverted: 'var(--bg-color-inverted)'
        }
      }
    },
  },
  plugins: [],
}
