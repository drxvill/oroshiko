/** @type {import("tailwindcss").Config} */

module.exports = {
    content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue"
    ],
    theme: {
        fontFamily: {
            outfit: ["Outfit", "sans-serif"]
        }
    },
    plugins: []
}