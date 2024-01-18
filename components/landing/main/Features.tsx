import React from 'react';
import FeaturesCard from '../sub/FeaturesCard';

const Features = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5 md:mx-[40px] mx-auto"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-500 py-5">
        Features
      </h1>
      <div className="h-full w-full flex flex-col justi md:flex-row gap-10 px-10">
        <FeaturesCard
          src="/feature-1.jpg"
          title="Domain Registration"
          description="Once you register a domain, you own it forever. No need to worry about renewing your domain every year. You can also sell your domain at any time."
        />
        <FeaturesCard
          src="/feature-2.jpg"
          title="Web3 Username"
          description="Your domain is your Web3 username. You can use it to log in to any integrated application built on LightLink, and you can also use it to receive payments from other users."
        />
        <FeaturesCard
          src="/feature-3.jpg"
          title="Domain Marketplace"
          description="We provide a marketplace for domain names, powered by Liteflow. The marketplace is integrated into the LLNS app, so users can easily buy and sell domains with a few clicks."
        />
      </div>
    </div>
  );
};

export default Features;
