import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

// Variants
const textVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5, transition: { duration: 1, ease: "easeIn" } },
};

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? { initial: {}, animate: {}, whileInView: {} }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
      };

  return (
    <motion.section
      className="
        relative bg-cover bg-center 
        h-auto md:h-[85vh] 
        flex items-center 
        pt-24 md:pt-32      /* navbar gap */
      "
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/3e/0c/11/3e0c113fd5c3581fb98b0ea17e794024.jpg')",
      }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
      {...animationProps}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        variants={overlayVariants}
        {...animationProps}
      />

      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col md:flex-row items-center">
        {/* TEXT CONTENT */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          variants={textVariants}
          {...animationProps}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            variants={textVariants}
            custom={0}
          >
            Streamline Your Business Operations
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0"
            variants={textVariants}
            custom={1}
          >
            Inventory, Sales, and Customer Management in One Place. The
            all-in-one POS solution for restaurants, retail, and cafes.
          </motion.p>

          <motion.a
            href="/services"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
            variants={textVariants}
            custom={2}
            whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
            whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
          >
            Start Your Application
          </motion.a>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center"
          variants={imageVariants}
          {...animationProps}
        >
          <motion.img
            src="https://i.postimg.cc/mkGGQQYL/2865fb50eaeeed386c8f0dee58ae22a7.jpg"
            alt="Hero Image pos saas"
            className="rounded-lg shadow-xl max-w-full max-h-[55vh] md:max-h-[60vh] object-cover"
            variants={imageVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
