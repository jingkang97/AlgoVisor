import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <>
      <motion.h1
        className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-300 via-white to-gray-400 tracking-tighter leading-tight"
        initial={{
          opacity: 0,
          y: 50, // Start below the original position (bottom to top)
          filter: "blur(10px)", // Start with a blur effect
          // scale: 0.8, // Start smaller (80% of its final size)
        }}
        animate={{
          opacity: 1, // End with full opacity
          y: 0, // End at the normal position (no vertical offset)
          filter: "blur(0px)", // End with no blur
          // scale: 1, // End at normal size (100% scale)
        }}
        transition={{
          duration: 0.8, // Duration of the animation
          ease: "easeOut", // Smooth animation at the end
        }}
      >
        Unleash the power of <br />
        <motion.span
          className="text-4xl md:text-[5rem] font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-br from-gray-300 via-white to-gray-400 leading-none"
          initial={{
            opacity: 0,
            y: 50, // Start below the original position
            filter: "blur(10px)", // Start with blur
            // scale: 0.8, // Start smaller
          }}
          animate={{
            opacity: 1, // End with full opacity
            y: 0, // End at the normal position
            filter: "blur(0px)", // End with no blur
            // scale: 1, // End at normal size
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3, // Slight delay for the second part of the text
          }}
        >
          Visualization
        </motion.span>
      </motion.h1>
    </>
  );
}
