'use client';
import React, { useState } from 'react';
import { faBars, faTimes, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type Props = {};

const navbarItems = [
  {
    name: 'Home',
    link: 'home',
  },
  {
    name: 'About',
    link: 'about',
  },
  {
    name: 'Work',
    link: 'work',
  },
  {
    name: 'Gallery',
    link: 'gallery',
  },
  {
    name: 'News',
    link: 'news',
  },
  {
    name: 'Contact',
    link: 'contact',
  },
];

const Navbar = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLHeadingElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <div className="w-full h-20 border-b border-pink fixed top-0 bg-transparent backdrop-filter backdrop-blur-[6px] z-30 flex justify-center items-center">
      <div className="hidden md:flex justify-center items-center">
        <div className="flex items-center justify-center">
          {navbarItems.slice(0, 3).map((item) => (
            <h5
              key={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              className="font-chillax font-medium text-[#D0D0DB] uppercase mx-4 text-base hover:text-white cursor-pointer"
            >
              {item.name}
            </h5>
          ))}
        </div>
        <Link href="/">
          <p className="text-pink font-licorice text-[32px] mx-6">
            Divya Jagdale
          </p>
        </Link>
        <div className="flex items-center justify-center">
          {navbarItems.slice(3, 6).map((item) => (
            <h5
              key={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              className="font-chillax font-medium text-[#D0D0DB] uppercase mx-4 text-base hover:text-white cursor-pointer"
            >
              {item.name}
            </h5>
          ))}
        </div>
      </div>
      <div className="block md:hidden w-[90%] flex justify-between items-center">
        <p className="text-pink font-licorice text-[32px] mx-6">
          Divya Jagdale
        </p>
        <button
          type="button"
          onClick={() => setisOpen(!isOpen)}
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <FontAwesomeIcon
            className="w-5 h-5 text-white"
            icon={isOpen ? faXmark : faBars}
          />
        </button>
      </div>
      <div
        className={`${
          !isOpen && 'hidden'
        } md:hidden absolute z-50 w-[40%] top-16 right-6 sm:right-12 bg-black bg-opacity-35 backdrop-filter backdrop-blur-[6px]`}
        id="mobile-menu"
      >
        <div className="px-2 pb-3 flex flex-col justify-center items-end w-full transform duration-300 mt-5">
          {navbarItems.map((item) => (
            <h5
              key={item.link}
              onClick={(e) => {
                handleNavClick(e, item.link);
                setisOpen(false);
              }}
              className="font-chillax font-medium text-[#D0D0DB] uppercase text-base hover:text-white cursor-pointer my-2"
            >
              {item.name}
            </h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
