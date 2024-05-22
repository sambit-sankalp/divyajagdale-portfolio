'use client';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="w-full h-20 shadow-nav-shadow fixed top-0  bg-white bg-opacity-70 backdrop-filter backdrop-blur-[6px] z-30 flex justify-center items-center">
      <div className="w-full h-full bg-bodybg flex justify-center items-center">
        <div className="hidden md:flex w-[90%] md:w-[75%] justify-between items-center">
          <Image
            src="/images/happyfoundation/logo.svg"
            alt="happyfoundation"
            width={260}
            height={40}
            className="w-[180px] lg:w-[260px] h-[40px] cursor-pointer"
          />
          <p className="text-black font-licorice text-[25px] lg:text-[32px] mx-6">
            Divya Jagdale
          </p>
          <button className="bg-black font-chillax px-6 py-2.5 text-[16px] rounded-[60px] text-white font-medium">
            Let’s Help Together
          </button>
        </div>
        <div className="flex md:hidden w-[90%] md:w-[75%] justify-between items-center">
          <Image
            src="/images/happyfoundation/logo.svg"
            alt="happyfoundation"
            width={260}
            height={40}
            className="w-[180px] lg:w-[260px] h-[40px] cursor-pointer"
          />
          <button
            type="button"
            onClick={() => setisOpen(!isOpen)}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              className="w-5 h-5 text-black"
              icon={isOpen ? faXmark : faBars}
            />
          </button>
        </div>
        <div
          className={`${
            !isOpen && 'hidden'
          } md:hidden absolute z-50 w-full top-16 right-0 bg-pink bg-opacity-80 backdrop-filter backdrop-blur-[6px]`}
          id="mobile-menu"
        >
          <div className="px-2 pb-3 flex justify-between items-end w-full transform duration-300 mt-5">
            <p className="text-black font-licorice text-[25px] lg:text-[32px] mx-6">
              Divya Jagdale
            </p>
            <button className="bg-black font-chillax px-6 py-2.5 text-[16px] rounded-[60px] text-white font-medium">
              Let’s Help Together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
