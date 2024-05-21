'use client';

import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const playData = [
  {
    title: 'Irani Cafe',
    description:
      'Irani Cafe is a game that takes you back to the 80s. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play.',
    image: '/images/home/playtrix/irani.svg',
  },
  {
    title: 'Irani Cafe',
    description:
      'Irani Cafe is a game that takes you back to the 80s. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play.',
    image: '/images/home/playtrix/clogged.svg',
  },
  {
    title: 'Irani Cafe',
    description:
      'Irani Cafe is a game that takes you back to the 80s. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play.',
    image: '/images/home/playtrix/coffee.svg',
  },
  {
    title: 'Irani Cafe',
    description:
      'Irani Cafe is a game that takes you back to the 80s. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play.',
    image: '/images/home/playtrix/see.svg',
  },
  {
    title: 'Irani Cafe',
    description:
      'Irani Cafe is a game that takes you back to the 80s. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play. It is a game that is set in the 80s and is a fun game to play.',
    image: '/images/home/playtrix/snapshots.svg',
  },
];

const sectionDescription = [
  'PLAYTRIX PLAYERS is a small theatre company started in 2016 with the primary focus on producing minimalistic plays for alternate spaces. It was founded by Divya Jagdale and Shiv Subrahmanyam.',
  'The plays were written by Shiv Subrahmanyam. Pushing their boundaries as theatre makers; together they showcased their plays, ‘The way I see It’, Toxic, and ‘Coffee in the canteen’ at unusual spaces for plays like restaurants, brewaries and the like that didn’t know they had the potential to transform into a theatre space.',
];

function isMobileScreen() {
  return window.innerWidth <= 768;
}

const Playtrix = (props: Props) => {
  const [iniPos, setIniPos] = useState(928);
  const [startPos, setstartPos] = useState('60%');
  const [dir, setDir] = useState(''); // ['left', 'right']
  const [index, setIndex] = useState(-1); // [0, 1, 2, 3, 4]
  const ref = useRef<HTMLDivElement>(null);
  // const scroll = (scrollOffset: any) => {
  //   if (ref.current) {
  //     ref.current.scrollLeft += scrollOffset;
  //   }
  // };

  function checkScreenSize() {
    if (isMobileScreen()) {
      if (index === -1) {
        setstartPos('83%');
        setIniPos(950);
      }
    } else {
      if (index === -1) {
        setstartPos('60%');
        setIniPos(928);
      }
    }
  }

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  }, []);

  const handleLeftClick = () => {
    const currentRight = iniPos + (isMobileScreen() ? 200 : 384);
    console.log('left', iniPos);
    if (ref.current) {
      ref.current.style.transition = 'transform 1s ease-in-out';
      ref.current.style.transform =
        index === 0
          ? `translateX(${startPos})`
          : `translateX(${currentRight}px)`;
    }
    setIniPos(currentRight);
    setIndex(index - 1);

    if (index === 0) {
      setIndex(-1);
    }
  };

  const handleRightClick = () => {
    // if (index !== -1) {
    //   console.log('Hi not-1');
    //   setstartPos(`${iniPos}px`);
    // }
    const currentRight = iniPos - (isMobileScreen() ? 200 : 384);
    console.log('right', iniPos);
    if (ref.current) {
      ref.current.style.transition = 'transform 1s ease-in-out';

      // ref.current.style.animation = 'bounce 1s ease-in';
      ref.current.style.transform = `translateX(${currentRight}px)`;
    }
    setIniPos(currentRight);
    setIndex(index + 1);
  };

  // console.log('startPos', startPos);
  // console.log('iniPos', iniPos);

  return (
    <div className="min-h-[80vh] sm:min-h-[120vh] w-full h-full bg-black relative flex justify-end items-center border-none">
      <div className="w-[70%] lg:w-[60%] flex flex-col justify-center items-start bg-pink min-h-[80vh] sm:min-h-[120vh] absolute left-0 z-10 px-10 sm:px-28 pb-0 sm:pb-16">
        <div className={`w-fit h-fit overflow-hidden`}>
          <Image
            src="/images/home/playtrix/playtrixHeading.png"
            alt="playtrix"
            width={550}
            height={550}
            className={`w-[150px] sm:w-[350px] lg:w-[550px] h-auto transition transform ease-in-out duration-1000 ${
              index === -1 ? 'translate-x-0' : 'translate-y-[100%] opacity-0'
            }`}
          />
        </div>
        <div
          className={`w-[80%] overflow-hidden h-fit sm:h-[270px] transition transform ease-in-out duration-1000  ${
            index === -1 ? 'translate-x-0' : 'translate-y-[100%] opacity-0'
          }`}
        >
          {sectionDescription.map((desc, id) => (
            <p
              key={id}
              className="text-white text-xs sm:text-lg mt-2 font-chillax font-medium"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start items-end overflow-hidden">
        <div
          ref={ref}
          // style={
          //   {
          //     '--start-pos': index === -1 ? startPos : startPos,
          //     '--mid-pos': `${iniPos - 20}px`,
          //     '--end-pos': `${iniPos}px`,
          //   } as React.CSSProperties
          // }
          className="w-fit scroll-smooth relative z-20 h-full flex justify-start translate-x-[83%] sm:translate-x-[60%] items-center"
        >
          {playData.map((data, id) => (
            <div
              key={id}
              className="min-w-[200px] lg:min-w-[360px] min-h-[300px] lg:min-h-[540px] w-[200px] lg:w-[360px] h-[300px] lg:h-[540px] flex items-start justify-start ml-6 overflow-hidden"
            >
              <div className="card w-full h-full relative">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={360}
                  height={540}
                  className={`w-[200px] lg:w-[360px] h-[300px] lg:h-[540px] delay-1000 ${
                    index !== -1 &&
                    (id === index || (!isMobileScreen() && id === index + 1))
                      ? 'scale-125'
                      : 'scale-100'
                  }`}
                />
                <div className="info absolute z-30 flex flex-col top-0 justify-end items-start p-10 text-white opacity-0 transform translate-y-8 transition ease-out duration-500">
                  <h1 className="text-2xl text-pink font-chillax">
                    {data.title}
                  </h1>
                  <p className="tracking-wide text-sm mt-2 font-poppins text-black">
                    {data.description}
                  </p>
                </div>
                <div className="overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-100 opacity-0 transition ease-out duration-500"></div>
                {/* <div className="w-[50%]">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-sm">{data.description}</p>
              </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] flex justify-center items-center mt-2 sm:mt-5 z-30">
          <button
            onClick={handleLeftClick}
            disabled={index === -1}
            className={`w-[30px] h-auto sm:w-[72px] sm:h-[72px] flex justify-center items-center rounded-tl-[10px] sm:rounded-tl-[20px] ${
              index === -1 ? 'bg-[#D0D0DB]' : 'bg-pink'
            }`}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-white h-auto sm:!h-7 w-5 sm:w-7"
            />
          </button>
          <button
            onClick={handleRightClick}
            disabled={index === (isMobileScreen() ? 4 : 3)}
            className={`w-[30px] h-auto sm:w-[72px] sm:h-[72px] bg-pink ml-2 flex justify-center items-center rounded-br-[10px] sm:rounded-br-[20px] ${
              index === (isMobileScreen() ? 4 : 3) ? 'bg-[#D0D0DB]' : 'bg-pink'
            }`}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white h-auto sm:!h-7 w-5 sm:w-7"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playtrix;
