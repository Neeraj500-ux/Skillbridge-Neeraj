/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d6ddef',
          200: '#adb9df',
          300: '#7d8ec8',
          400: '#4f60a8',
          500: '#2f3d80',
          600: '#212a5c',
          700: '#171d42',
          800: '#0f1330',
          900: '#0a0d22',
          950: '#06081a',
        },
        electric: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#b7dcff',
          300: '#84c5ff',
          400: '#49a5ff',
          500: '#1f83fb',
          600: '#0d63e0',
          700: '#0a4eb4',
          800: '#0d4291',
          900: '#103a75',
        },
        violet: {
          50: '#f4f1ff',
          100: '#eae3ff',
          200: '#d7caff',
          300: '#b8a3ff',
          400: '#9673ff',
          500: '#7c4dff',
          600: '#6c2dfa',
          700: '#5c1fd8',
          800: '#4c1bae',
          900: '#3f1a8a',
        },
        emerald: {
          500: '#12b981',
          600: '#0a9968',
        },
        amber: {
          500: '#f5a524',
          600: '#dc8b0a',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,13,34,0.04), 0 4px 12px rgba(10,13,34,0.06)',
        card: '0 2px 8px rgba(10,13,34,0.06), 0 8px 24px rgba(10,13,34,0.08)',
        lift: '0 12px 32px rgba(10,13,34,0.14)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '22px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg,#212a5c 0%,#5c1fd8 55%,#0d63e0 100%)',
        'violet-glow': 'radial-gradient(60% 60% at 50% 0%, rgba(124,77,255,0.16) 0%, rgba(124,77,255,0) 70%)',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
}
