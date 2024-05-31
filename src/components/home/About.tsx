'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SubHeading from '../shared/SubHeading';
import Heading from '../shared/Heading';

type Props = {};

const tags = [
  { name: 'Mother', style: 'rounded-none' },
  { name: 'Actress', style: 'rounded-[60px]' },
  { name: 'Creator', style: 'rounded-tl-[20px] rounded-br-[20px]' },
  { name: 'Halwain', style: 'rounded-bl-[20px] rounded-tr-[20px]' },
  { name: 'Thespian', style: 'rounded-[10px]' },
  { name: 'Writer', style: 'rounded-bl-[20px]' },
];

const aboutContent = [
  'Hi there! This is my website. I work as an actor, screenwriter, and theatre personality. My focus is on promoting positive change and inspiring awakening in people.',
  'I believe that we can make this happen collectively because I have gone through significant personal transformation myself. ',
  'Although I continue to work as an actor and also perform on stage, I am eager to build genuine communities.',
  'Additionally, I am a passionate cook and refer to myself as a Halwain.',
];

const About = (props: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeBool = () => {
      // 0, 1, 2
      setIndex((t) => {
        if (t === 3) {
          return 0;
        } else if (t === 2) {
          return 5;
        } else {
          return t >= 3 ? t - 1 : t + 1;
        }
      });
    };

    const intervalId = setInterval(changeBool, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-black w-full flex justify-center items-center pt-10 md:pt-20">
      <div className="w-[75%] grid grid-cols-2 md:grid-cols-3">
        <div className="col-span-2 w-full h-full relative">
          <div className="flex flex-col md:flex-row justify-start items-start">
            <div className="flex flex-col justify-start items-start">
              <SubHeading>Who Am I</SubHeading>
              <Heading>
                H<span className="text-pink font-licorice">e</span>y!
              </Heading>
            </div>
            <div className="flex justify-center items-start flex-col w-full md:w-[55%] px-auto ml-0 md:ml-5 xl:ml-10 mt-1 md:mt-5 lg:mt-10">
              {aboutContent.map((content, index) => (
                <p
                  key={index}
                  className="text-[#D0D0DB] text-base xl:text-xl font-chillax my-1"
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
          <div className="hidden md:block flex flex-col justify-center items-center absolute left-0 -bottom-28 lg:-bottom-16 xl:bottom-0">
            <div className="grid grid-cols-3">
              {tags.map((tag, id) => (
                <div
                  key={id}
                  className={`${
                    id === index
                      ? `bg-pink text-white`
                      : `bg-transparent text-pink`
                  } text-center px-4 py-2.5 mr-2 mt-2 uppercase border-2 border-[#6C6C73] ${
                    tag.style
                  }`}
                >
                  {tag.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-2 md:mt-0 md:col-span-1 rounded-tl-[60px] rounded-bl-[60px] overflow-hidden">
          <Image
            src="/images/home/djimage.svg"
            width={456}
            height={740}
            alt="dj"
            className="w-full h-auto grayscale rounded-tl-[60px] rounded-bl-[60px] hover:grayscale-0 hover:scale-110 transition-all duration-1000 ease-in-out"
          />
        </div>
        <div className="w-full block md:hidden flex flex-col justify-center items-center col-span-2">
          <div className="w-full grid grid-cols-3">
            {tags.map((tag, id) => (
              <div
                key={id}
                className={`${
                  id === index
                    ? `bg-pink text-white`
                    : `bg-transparent text-pink`
                } text-center font-chillax px-2 md:px-4 py-1.5 md:py-2.5 mt-2 ${
                  index === 2 ? 'mr-0' : 'mr-2'
                } ${
                  index === 5 ? 'mr-0' : 'mr-2'
                } text-base md:text-xl font-medium uppercase border-2 border-[#6C6C73] ${
                  tag.style
                }`}
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
