/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#1976d2',
        'my-light-blue': '#3dbbfe',
        'my-off-white': '#f3f4f6'
      },
    },
  },
  plugins: [],
}