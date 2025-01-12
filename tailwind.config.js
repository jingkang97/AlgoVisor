/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    outline: false,
    ringWidth: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #E2CBFF, #B0A1E7, #A0A2E3, #8E83D9,#8E83D9,#A0A2E3,#B0A1E7, #E2CBFF )",
      },
      animation: {
        scaleSpread: "scaleSpread 8s ease-in-out infinite", // Smooth and slow animation
        "gradient-x": "gradient-x 10s ease-in-out infinite",
        "gradient-fill": "gradient-fill 3s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%": {
            backgroundPosition: "-200% 50%", // Start the gradient completely off the left
          },
          "100%": {
            backgroundPosition: "100% 50%", // Loop back to the start
          },
        },
        "gradient-fill": {
          "0%": {
            "--gradient-stop-1": "#E2CBFF",
            "--gradient-stop-2": "#A0A2E3",
            "--gradient-stop-3": "#393BB2",
          },
          "50%": {
            "--gradient-stop-1": "#A0A2E3",
            "--gradient-stop-2": "#E2CBFF",
            "--gradient-stop-3": "#8E83D9",
          },
          "100%": {
            "--gradient-stop-1": "#E2CBFF",
            "--gradient-stop-2": "#A0A2E3",
            "--gradient-stop-3": "#393BB2",
          },
        },

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
            transform: "scale(1, 1)", // Full scale in the middle
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
        },
      },
    },
  },
  plugins: [],
};
