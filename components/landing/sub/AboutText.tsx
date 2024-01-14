'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const AboutText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#06b6d4] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[16px]">| About LLNS</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[20px] md:text-[30px] text-gray-400 mt-[10px] text-center mb-[15px] z-30"
      >
        Welcome to LLNS – a beacon in the dynamic world of digital identity. We
        are a decentralized name service built on the LightLink Network.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default AboutText;
