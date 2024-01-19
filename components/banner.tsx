"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

export const Banner = ({ src }: any) => {
  return (
    <div>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 5 }}
        variants={{
          initialState: { opacity: 0 },
          animateState: { opacity: 2 },
          eexitState: {},
        }}
        className="base-page-size"
      >
        <Image
          src={src}
          className="mt-16"
          layout="fill"
          objectFit="cover"
          priority={false}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Picture of the author"
        />
      </motion.div>
    </div>
  );
};
