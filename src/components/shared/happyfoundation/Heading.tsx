import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <div
      className={`text-[#1E1E1E] font-suisseintl text-[30px] md:text-[70px] lg:text-[90px] leading-[40px] md:leading-[80px] lg:leading-[110px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Heading;
