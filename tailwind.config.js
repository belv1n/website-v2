/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
				fadein: {
					'0%': { transform: 'scale(0.98, 0.98)' },
					'100%': { transform: 'scale(1, 1)' },
				  },
				},

      animation: {
        spin: 'spin 20s linear infinite',
        fadein: 'fadein 0.75s ease-in-out',
      },
    },
  },
  plugins: [],
}

