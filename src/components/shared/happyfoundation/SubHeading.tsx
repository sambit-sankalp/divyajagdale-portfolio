import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <div
      className={`text-[#1E1E1E] font-suisseintl text-[25px] md:text-[60px] lg:text-[80px] leading-[40px] md:leading-[75px] lg:leading-[92px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Heading;
