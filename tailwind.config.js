/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scaleSpread: "scaleSpread 8s ease-in-out infinite", // Smooth and slow animation
      },
      keyframes: {
        scaleSpread: {
          "0%": {
            transform: "scale(0.99, 1)", // Slightly smaller, random scaleX and scaleY
          },
          "10%": {
            transform: "scale(1, 0.99)", // Randomly scaleX and scaleY
          },
          "20%": {
            transform: "scale(1, 0.97)", // Random scaling
          },
          "30%": {
            transform: "scale(0.98, 1)", // Random scaling
          },
          "40%": {
            transform: "scale(1, 1)", // Normal size
          },
          "50%": {
            transform: "scale(0.99, 0.99)", // Slight shrinkage
          },
          "60%": {
            transform: "scale(1, 1)", // Full scale again
          },
          "70%": {
            transform: "scale(1, 0.98)", // Random scaling
          },
          "80%": {
            transform: "scale(0.97, 1)", // Slightly smaller again
          },
          "90%": {
            transform: "scale(0.99, 1)", // Slight shrinkage again
          },
          "100%": {
            transform: "scale(1, 1)", // Reset to normal size
          },
          // Reverse animation for smooth transition
          "50%": {
            transform: "scale(1, 1)", // Full scale in the middle
          },
          "100%": {
            transform: "scale(0.99, 1)", // End at the starting point
          },
        },
      },
    },
  },
  plugins: [],
};
