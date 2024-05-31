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
      'Revolving inconspicuously around an Irani Cafe, a web of stories weave themselves in and out around the tangled lives of our central characters. The owner of the Irani Cafe is a genial man who likes to watch life unfold. The stories of all the characters run simultaneously, held together by a magical breeze and makes sure after some bumps and starts, everyone gets what they want and harmony reigns.',
    image: '/images/home/playtrix/irani.svg',
    style: 'rounded-tl-[30px] md:rounded-tl-[60px]',
  },
  {
    title: 'CLOGGED ARTERIES',
    description:
      'Avinash Mathur has everything – and a clogged artery. A series of incidents with his wife, problem children, mistress, ranging from the tragic to the ridiculous, gradually reveal the inner design of the play that urban middle class life is “a clogged artery',
    image: '/images/home/playtrix/clogged.svg',
    style: 'rounded-bl-[30px] md:rounded-bl-[60px]',
  },
  {
    title: 'THE WAY I SEE IT',
    description:
      'THE WAY I SEE IT ‘ is a one-woman show about life in general; including all issues, both small and big ; things that happen to a forty-something married woman charting her perilous course between independence and responsibility; between marriage and self-realisation; between kids and work; a comic, funny and satirical look at how she looks at the world, and how the world looks at her.',
    image: '/images/home/playtrix/see.svg',
    style: 'rounded-tr-[30px] md:rounded-tr-[60px]',
  },
  {
    title: 'SNAPSHOTS FROM AN ALBUM',
    description:
      'Traces the evolution of a relationship between two people over a period of 45years, looking at milestones like courtship, ,marriage, parenthood, divorce and turning 60. The play is a funny, tender and warm look at a relationship. A delightful romp through three decades.',
    image: '/images/home/playtrix/snapshots.svg',
    style: 'rounded-br-[30px] md:rounded-br-[60px]',
  },
  {
    title: 'COFFEE IN THE CANTEEN',
    description:
      'Four students in a college, each one with their own dreams, their own aspirations, their own problems. And there is also the perennial problem of falling in love…and moreover, falling in love with the wrong person…or not realizing the wrong person is the right person…and the right person could be the wrong person. And the question of dreams and passion and the courage to follow your dream.',
    image: '/images/home/playtrix/coffee.svg',
    style: 'rounded-tl-[30px] md:rounded-tl-[60px]',
  },
];

const sectionDescription = [
  'PLAYTRIX PLAYERS is a small theatre company started in 2016 with the primary focus on producing minimalistic plays for alternate spaces. It was founded by Divya Jagdale and Shiv Subrahmanyam.',
  'The plays were written by Shiv Subrahmanyam. Pushing their boundaries as theatre makers; together they showcased their plays, ‘The way I see It’, Toxic, and ‘Coffee in the canteen’ at unusual spaces for plays like restaurants, brewaries and the like that didn’t know they had the potential to transform into a theatre space.',
];

const Playtrix = (props: Props) => {
  const [iniPos, setIniPos] = useState(928);
  const [startPos, setstartPos] = useState('60%');
  const [dir, setDir] = useState(''); // ['left', 'right']
  const [rightButtonDisable, setrightButtonDisable] = useState(false);
  const [index, setIndex] = useState<number>(-1); // [0, 1, 2, 3, 4]
  const ref = useRef<HTMLDivElement>(null);
  // const scroll = (scrollOffset: any) => {
  //   if (ref.current) {
  //     ref.current.scrollLeft += scrollOffset;
  //   }
  // };

  function isMobileScreen() {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
  }

  useEffect(() => {
    function checkScreenSize() {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 768) {
          if (index === -1) {
            setstartPos('83%');
            setIniPos(950);
          }
          setrightButtonDisable(index === 4);
        } else {
          if (index === -1) {
            setstartPos('60%');
            setIniPos(928);
          }
          setrightButtonDisable(index === 3);
        }
      }
    }

    if (typeof window !== 'undefined') {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    }

    // return () => {
    //   if (typeof window !== 'undefined') {
    //     window.removeEventListener('resize', checkScreenSize);
    //   }
    // };
  }, [index]);

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
    setrightButtonDisable(rightButtonDisable);
  };

  const handleRightClick = () => {
    // if (index !== -1) {
    //   console.log('Hi not-1');
    //   setstartPos(`${iniPos}px`);
    // }
    const currentRight = iniPos - (isMobileScreen() ? 220 : 384);
    console.log('right', iniPos);
    if (ref.current) {
      ref.current.style.transition = 'transform 1s ease-in-out';

      // ref.current.style.animation = 'bounce 1s ease-in';
      ref.current.style.transform = `translateX(${currentRight}px)`;
    }
    setIniPos(currentRight);
    setIndex(index + 1);
    // setrightButtonDisable(isMobileScreen() ? index === 4 : index === 3);
  };

  // console.log('startPos', startPos);
  // console.log('iniPos', iniPos);

  console.log('disbale', rightButtonDisable);

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
              <div
                className={`card w-full h-full relative ${data.style} overflow-hidden`}
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  width={360}
                  height={540}
                  className={`w-[200px] lg:w-[360px] h-[300px] lg:h-[540px] delay-1000 ${
                    data.style
                  } ${
                    index !== -1 &&
                    (id === index || (!isMobileScreen() && id === index + 1))
                      ? 'grayscale-0'
                      : 'grayscale'
                  }`}
                />
                <div
                  className={`info absolute z-30 flex flex-col top-0 justify-end items-start px-8 pt-10 text-white opacity-0 rounded-lg transform translate-y-8 transition ease-out duration-500`}
                >
                  <h1 className="text-2xl text-pink font-chillax font-medium uppercase">
                    {data.title}
                  </h1>
                  <p className="tracking-wide text-lg mt-2 font-chillax font-medium text-[#6C6C73]">
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
              className="text-white h-auto sm:!h-7 w-3 sm:w-7 py-2"
            />
          </button>
          <button
            onClick={handleRightClick}
            disabled={index === (isMobileScreen() ? 4 : 3)}
            className={`w-[30px] h-auto sm:w-[72px] sm:h-[72px] bg-pink ml-2 flex justify-center items-center rounded-br-[10px] sm:rounded-br-[20px] ${
              rightButtonDisable ? 'bg-[#d0d0db]' : 'bg-pink'
            }`}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white h-auto sm:!h-7 w-3 sm:w-7 py-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playtrix;
