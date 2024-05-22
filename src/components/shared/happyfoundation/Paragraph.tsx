import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Paragraph = ({ children, className }: Props) => {
  return (
    <p className="text-[14px] md:text-[20px] font-chillax text-[#3C3C3C]">
      {children}
    </p>
  );
};

export default Paragraph;
