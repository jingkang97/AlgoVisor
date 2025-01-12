import { motion } from "framer-motion";
import CustomButton from "./ui/custombutton";

export default function AnimatedText() {
  return (
    <div className="mb-[-170px]">
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
        <motion.p
          initial={{
            opacity: 0,
            y: 50, // Start below the original position
            // scale: 0.8, // Start smaller
          }}
          animate={{
            opacity: 1, // End with full opacity
            y: 0, // End at the normal position
            // scale: 1, // End at normal size
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3, // Slight delay for the second part of the text
          }}
          className="text-xl font-[500] tracking-tighter mt-4"
        >
          Stuck on a DSA problem? Use{" "}
          <span className="font-bold text-white">visualization</span> <br /> to
          <span className="font-bold text-white"> see the solution</span> unfold
          and conquer complexity!
        </motion.p>
      </motion.h1>
      <motion.div
        className="justify-center flex mt-4 space-x-4"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1, // End with full opacity
          y: 0, // End at the normal position (no vertical offset)
        }}
        transition={{
          delay: 1,
          duration: 1, // Duration of the animation
        }}
      >
        <CustomButton
          text={"Get Started"}
          color={"text-black"}
          bgColor={"white"}
        />
        <CustomButton
          text={"See plans & pricing"}
          bgColor={"transparent"}
          color={"text-white"}
          border={"border-1"}
          borderColor={"border-white"}
        />
      </motion.div>
    </div>
  );
}
