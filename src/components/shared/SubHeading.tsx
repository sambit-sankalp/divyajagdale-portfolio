import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SubHeading = ({ children, className }: Props) => {
  return (
    <h5 className={`uppercase font-chillax font-medium text-pink text-base sm:text-lg lg:text-2xl ${className}`}>
      {children}
    </h5>
  );
};

export default SubHeading;
