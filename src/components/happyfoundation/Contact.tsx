import React from 'react';
import Heading from '../shared/happyfoundation/Heading';
import Image from 'next/image';

type Props = {};

const Contact = (props: Props) => {
  const inputStyle =
    'block py-1.5 sm:py-3 px-4 sm:px-6 w-full text-base sm:text-xl text-black caret-black font-chillax bg-transparent border-b-2 border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer';

  const labelStyle =
    'font-chillax absolute text-base sm:text-xl text-[#AAAAAA] duration-300 transform ml-3 sm:ml-6 translate-y-0 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-focus:opacity-0';

  return (
    <div className="min-h-[80vh] md:min-h-screen w-[75%] mx-auto pt-16 md:pt-36">
      <Heading className="w-1/2">
        Let’s{' '}
        <span className="inline-flex justify-center items-center h-fit mt-2">
          <Image
            src="/images/happyfoundation/emojis/t.png"
            alt="hero"
            width={72}
            height={72}
            className="w-auto h-[28px] md:h-[50px] lg:h-[65px] mr-0.5"
          />
          elp
        </span>{' '}
        Together
      </Heading>
      <div className="w-full mt-8 md:mt-16 grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-6 mx-auto">
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="name"
            id="name"
            className={`${inputStyle}`}
            placeholder="Name"
            required
          />
          <label htmlFor="name" className={labelStyle}></label>
        </div>
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="phone"
            id="phone"
            className={`${inputStyle}`}
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
            className={`${inputStyle}`}
            placeholder="Email"
            required
          />
          <label htmlFor="email" className={`${labelStyle}`}></label>
        </div>
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="city"
            id="city"
            className={`${inputStyle}`}
            placeholder="City"
            required
          />
          <label htmlFor="city" className={`${labelStyle}`}></label>
        </div>
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="age"
            id="age"
            className={`${inputStyle}`}
            placeholder="Age"
            required
          />
          <label htmlFor="age" className={`${labelStyle}`}></label>
        </div>
        <div className="relative z-0 w-full mb-1 group">
          <input
            type="text"
            name="gender"
            id="gender"
            className={`${inputStyle}`}
            placeholder="Gender"
            required
          />
          <label htmlFor="gender" className={`${labelStyle}`}></label>
        </div>
      </div>
      <button className="w-[70%] mt-8 md:mt-16 sm:w-1/2 mx-auto flex justify-center items-center font-medium bg-[#1E1E1E] hover:bg-black rounded-[60px]">
        <p
          className={`font-chillax font-medium text-lg sm:text-2xl py-1 sm:py-3 text-white`}
        >
          Submit
        </p>
      </button>
    </div>
  );
};

export default Contact;
