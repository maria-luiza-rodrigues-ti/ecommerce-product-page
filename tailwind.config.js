/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "border-gray-100": "#E4E9F2",
      },
      maxWidth: {
        "max-content": "max-content",
      },
      maxHeight: {
        "max-content": "max-content",
      },
      boxShadow: {
        minicart: " 0px 20px 50px -20px rgba(29, 32, 38, 0.50)",
      },
      animation: {
        "slide-down": "slide-down .6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up .6s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(o)" },
        },
      },
    },
  },
  plugins: [],
};
