'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-14 mt-12 md:mt-[120px] ml-0 md:ml-6 w-full z-[20]"
    >
      <div className="flex flex-col gap-5 justify-center text-center md:text-start w-full h-full">
        <motion.div
          variants={slideInFromTop}
          className="hidden sm:hidden lg:inline-flex items-center justify-center lg:justify-start bg-opacity-90 py-2 px-3 border border-[#06b6d4] rounded-full w-[32%]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Lightlink Name Service</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 md:mt-6 mt-[60px] md:text-6xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto md:leading-[1.2] leading-snug "
        >
          <span>
            Craft Unique Identities on the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-500">
              {' '}
              LightLink Network{' '}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="md:text-lg text-base text-gray-400 my-5 max-w-[600px]"
        >
          Decentralized Name Service on LightLink. Use your LLNS name to store
          all of your addresses and receive any cryptocurrency, token, or NFT.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 md:px-0 px-6 button-primary text-center text-white cursor-pointer rounded-lg md:max-w-[200px] max-w-xs md:mx-0 mx-auto"
        >
          Launch App
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center my-10 md:my-0"
      >
        <Image
          src="/planet-nft-blue-2.png"
          alt="work icons"
          height={500}
          width={500}
          className="animate-[spin_250s_linear_infinite] drop-shadow-[0_0_40px_rgba(0,139,139,1)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
