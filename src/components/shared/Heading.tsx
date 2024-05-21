import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <h3
      className={`uppercase text-white tracking-wide text-[40px] sm:text-[50px] md:text-[70px] lg:text-[120px] font-forum leading-[50px] md:leading-[70px] lg:leading-[130px] ${className}`}
    >
      {children}
    </h3>
  );
};

export default Heading;
