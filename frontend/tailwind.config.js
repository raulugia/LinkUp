/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#37A4DA", // #2897C2 default 4B6DCF
          secondary: "##F0F2FB",
        }
      },
      fontFamily: {
        "mona": ["Mona Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}