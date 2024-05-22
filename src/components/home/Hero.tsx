'use client';
import React, { useEffect, useState } from 'react';

type Props = {};

const Hero = (props: Props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const changeBool = () => {
      setToggle((t) => !t);
    };

    const intervalId = setInterval(changeBool, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const textStyle =
    'text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] uppercase leading-[70px] sm:leading-[100px] md:leading-[150px] lg:leading-[200px]';

  return (
    <div className="relative bg-hero-image bg-cover bg-center min-h-screen flex justify-center items-center shadow-hero-overlay z-20">
      <div className="w-[70%] flex flex-col">
        <h1
          className={`font-forum ${textStyle} text-left ${
            toggle ? 'text-pink' : 'text-white'
          }`}
        >
          Div
          <span
            className={`font-licorice ${toggle ? 'text-white' : 'text-pink'}`}
          >
            y
          </span>
          a
        </h1>
        <h1
          className={`font-forum ${textStyle} ${
            toggle ? 'text-white' : 'text-pink'
          }  text-right`}
        >
          Jagd
          <span
            className={`font-licorice ${toggle ? 'text-pink' : 'text-white'}`}
          >
            a
          </span>
          le
        </h1>
      </div>
    </div>
  );
};

export default Hero;
