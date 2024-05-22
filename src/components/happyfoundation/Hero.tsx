import Image from 'next/image';
import React from 'react';
import Heading from '../shared/happyfoundation/Heading';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="min-h-[50vh] md:min-h-screen w-full bg-transparent pt-20 grid grid-cols-1 sm:grid-cols-2">
      <div className="col-span-1 h-full mt-10 flex justify-center md:justify-end items-center">
        <Heading className="w-[75%] min-h-[20vh] md:min-h-[80vh]">
          <span>Changing Lives,</span>{' '}
          <span className="inline-flex justify-center items-center h-fit mt-2">
            <Image
              src="/images/happyfoundation/smiley.png"
              alt="hero"
              width={82}
              height={82}
              className="w-auto h-[28px] md:h-[60px] lg:h-[75px]"
            />
            ne
          </span>{' '}
          <span className="-mt-2">Smile at a Time</span>
        </Heading>
      </div>
      <div className="w-full col-span-1">
        <Image
          src="/images/happyfoundation/heroimage.svg"
          alt="hero"
          width={708}
          height={812}
          className="w-full h-auto rounded-bl-[80px]"
        />
      </div>
    </div>
  );
};

export default Hero;
