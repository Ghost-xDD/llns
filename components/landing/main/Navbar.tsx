import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg backdrop-blur-md z-50 px-4 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between mx-auto">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold text-sm lg:text-lg hidden lg:block text-gray-300 ml-2">
            LLNS
          </span>
        </a>

        <div className="hidden lg:flex w-auto h-full items-center justify-between mr-20">
          <div className="flex items-center justify-between w-full h-auto bg-[#03001436] px-4 py-2 rounded-full text-gray-200 gap-10">
            <a href="#about-me" className="cursor-pointer">
              Developers
            </a>
            <a href="#skills" className="cursor-pointer">
              Documentation
            </a>
            <a href="#projects" className="cursor-pointer">
              WhitePaper
            </a>
            <a href="#contact" className="cursor-pointer">
              Blog
            </a>
          </div>
        </div>

        <div className=" items-center gap-3 lg:gap-5 py-2 px-4 lg:px-8 text-center text-white cursor-pointer rounded-lg text-xl block md:hidden">
          <AiOutlineMenu />
        </div>

        <div className=" items-center gap-3 lg:gap-5 py-2 px-4 lg:px-8 text-center text-white cursor-pointer rounded-lg md:flex hidden">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
