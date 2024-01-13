'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className="absolute w-auto h-auto top-0 z-[5]">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-500"
      >
        For Developers
      </motion.div>
    </div>
  );
};

export default SkillText;
