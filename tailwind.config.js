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
          primary: 'var(--text-color-primary)',
          muted: 'var(--text-color-muted)',
          inverted: 'var(--text-color-inverted)'
        }
      },

      backgroundColor: {
        theme: {
          primary: 'var(--bg-color-primary)',
          secondary: 'var(--bg-color-secondary)',
          muted: 'var(--bg-color-muted)',
          inverted: 'var(--bg-color-inverted)',
          ['nav-item-hover']: 'var(--bg-color-nav-item-hover)'
        }
      }
    },
  },
  plugins: [],
}
