/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-texture": "url('/images/bg-sidebar-desktop.svg')",
        "sidebar-texture-mobile": "url('/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
