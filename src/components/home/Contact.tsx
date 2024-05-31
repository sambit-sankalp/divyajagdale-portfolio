'use client';
import React, { useState } from 'react';
import SubHeading from '../shared/SubHeading';
import Heading from '../shared/Heading';
import Image from 'next/image';

type Props = {};

const Contact = (props: Props) => {
  const [hover, sethover] = useState(false);
  const inputStyle =
    'block py-1.5 sm:py-3 px-4 sm:px-6 w-full text-base sm:text-xl text-white caret-pink font-chillax bg-transparent border-2 border-[#6C6C73] appearance-none focus:outline-none focus:ring-0 focus:border-white peer';

  const labelStyle =
    'font-chillax absolute text-base sm:text-xl text-[#6C6C73] duration-300 transform ml-3 sm:ml-6 translate-y-0 scale-75 top-3 -z-10 origin-[0] peer-focus:text-white peer-focus:opacity-0';
  return (
    <div className="min-h-[70vh] sm:min-h-screen bg-black pt-5">
      <div className="w-[75%] flex flex-col justify-start items-start mx-auto pb-4 sm:pb-10">
        <SubHeading>LET’S BUILD SOMETHING</SubHeading>
        <Heading>
          TO<span className="font-licorice text-pink">G</span>ETH
          <span className="font-licorice text-pink">E</span>R
        </Heading>
      </div>
      <div className="w-[75%] grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-6 mx-auto">
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="name"
            id="name"
            className={`${inputStyle} rounded-tl-[20px]`}
            placeholder="Name"
            required
          />
          <label htmlFor="name" className={`${labelStyle}`}></label>
        </div>
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="phone"
            id="phone"
            className={`${inputStyle} rounded-tr-[20px]`}
            placeholder="Phone"
            required
          />
          <label htmlFor="phone" className={`${labelStyle}`}></label>
        </div>
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="email"
            id="email"
            className={`${inputStyle} rounded-bl-[20px]`}
            placeholder="Email"
            required
          />
          <label htmlFor="email" className={`${labelStyle}`}></label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="message"
            id="message"
            className={`${inputStyle} rounded-br-[20px]`}
            placeholder="Message"
            required
          />
          <label htmlFor="message" className={`${labelStyle}`}></label>
        </div>
      </div>
      <div className="w-[75%] mx-auto flex justify-center items-center mt-6 sm:mt-12">
        <button
          onMouseEnter={() => sethover(true)}
          onMouseLeave={() => sethover(false)}
          className="transition-all duration-1000 ease-out w-[70%] sm:w-1/2 mx-auto flex justify-center items-center bg-[#6C6C73] hover:bg-pink rounded-[60px]"
        >
          <p
            className={`transition-all duration-1000 ease-out font-medium ${
              hover ? '-translate-x-2.5' : 'translate-x-0'
            } font-chillax text-lg sm:text-2xl py-1 sm:py-3 text-white uppercase`}
          >
            SEND
          </p>
          <Image
            src="images/home/send.svg"
            width={20}
            height={20}
            className={`w-5 h-5 ml-1 mb-1 opacity-0 transition-all duration-1000 ease-out ${
              hover ? 'opacity-100 -translate-x-1.5' : 'opacity-0'
            }`}
            alt="send"
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;
