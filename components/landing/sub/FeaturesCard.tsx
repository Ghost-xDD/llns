import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
}

const FeaturesCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#06b6d4]  w-full">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain "
      />

      <div className="relative p-4 text-center height">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
