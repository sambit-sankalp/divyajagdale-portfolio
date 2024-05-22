import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col justify-center mt-10 md:mt-44 items-center">
      <h1 className="text-[#AAAAAA] text-base sm:text-xl font-chillax font-medium">
        @ {currentYear} |{' '}
        <span className="text-[#1E1E1E] font-medium">Happy Foundation</span>
      </h1>
      <div className="h-3 w-full mt-3 sm:mt-6 grid grid-cols-3">
        <div className="h-full w-full bg-[#F9B131]"></div>
        <div className="h-full w-full bg-[#7FC8C3]"></div>
        <div className="h-full w-full bg-[#E84C15]"></div>
      </div>
    </footer>
  );
};

export default Footer;
