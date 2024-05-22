import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col justify-center items-center">
      <h1 className="text-[#D0D0DB] text-base sm:text-xl font-chillax">
        @ {currentYear} | <span className="text-pink">Divya Jadgale</span>
      </h1>
      <div className="h-3 bg-pink w-full mt-3 sm:mt-6"></div>
    </footer>
  );
};

export default Footer;
