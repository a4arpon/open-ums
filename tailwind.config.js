/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      primary: '#89b1fd',
      secondary: '#1dc7a1',
      warn: '#f8ec70',
      dark: '#111618',
      light: '#f5f5f5',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '1rem',
        md: '1rem',
        lg: '0',
      },
    },
  },
  plugins: [],
}
