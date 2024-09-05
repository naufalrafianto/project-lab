"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LoadingWave = () => {
  const bars = Array.from({ length: 10 }, (_, i) => i);

  const barVariants = {
    animate: (i: number) => ({
      height: [10, 50, 10],
      transition: {
        duration: 1,
        repeat: Infinity,
        delay: i * 0.1,
      },
    }),
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-50">
      <motion.div
        className="mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          width={280}
          height={74}
          src="/assets/logo.png"
          alt="iDerm4U Logo"
          className="mx-auto h-auto w-2/3"
        />
      </motion.div>
      <div className="mb-4 flex h-8 items-end space-x-1">
        {bars.map((bar) => (
          <motion.div
            key={bar}
            className="w-1.5 rounded-full bg-primary"
            initial={{ height: 10 }}
            variants={barVariants}
            animate="animate"
            custom={bar}
          />
        ))}
      </div>
      <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-200">
        <motion.div
          className="h-full bg-primary"
          variants={progressVariants}
          initial="initial"
          animate="animate"
        />
      </div>
      <motion.p
        className="mt-4 rounded-full font-semibold text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingWave;
