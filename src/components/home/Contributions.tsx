'use client';
import React, { useEffect, useRef, useState } from 'react';
import SubHeading from '../shared/SubHeading';
import Heading from '../shared/Heading';
import Draggable from '../shared/Draggable';
import Image from 'next/image';

type Props = {};

const categoryData = [
  { name: 'Film', style: 'rounded-none' },
  { name: 'Theatre', style: 'rounded-[10px]' },
  {
    name: 'Writing',
    style:
      'rounded-tl-[10px] sm:rounded-tl-[20px] rounded-br-[10px] sm:rounded-br-[20px]',
  },
];

const filmData = [
  {
    imageURL: '/images/home/contributions/image1.svg',
    width: '360px',
    height: '456px',
    title: 'GULAB GANG',
    description:
      'Rajjo runs a gang that strives to uplift the downtrodden and combat injustice in the village. When a corrupt politician runs for the local elections, Rajjo decides to compete against her.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[456px] rounded-tl-[30px] sm:rounded-tl-[60px]',
    style:
      'w-[180px] h-auto sm:w-[360px] sm:h-[456px] rounded-tl-[30px] sm:rounded-tl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image2.svg',
    width: '456px',
    height: '280px',
    title: 'THE TENANT',
    description:
      'A conservative Mumbai suburb is bestirred by the arrival of an alluring cosmopolitan woman in their midst.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image3.svg',
    width: '456px',
    height: '640px',
    title: 'STANLEY KA DABBA',
    description:
      "'Stanley Ka Dabba' is the newest contribution from the perceptive writer-director, Amole Gupte that throws light on the daily life of a school going child. The movie discloses how this is child-soldier, rises above his pungent actual life condition on the way setting a pattern for all whiners to learn from, even imitate.",
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[640px] rounded-bl-[30px] sm:rounded-bl-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[640px] rounded-bl-[30px] sm:rounded-bl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image4.svg',
    width: '360px',
    height: '360px',
    title: 'STANLEY KA DABBA',
    description:
      'It is the newest contribution from the perceptive writer-director, Amole Gupte that throws light on the daily life of a school going child.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[180px] sm:w-[360px] h-auto sm:h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image5.svg',
    width: '360px',
    height: '456px',
    title: 'THE TENANT',
    description:
      'A conservative Mumbai suburb is bestirred by the arrival of an alluring cosmopolitan woman in their midst. When a wide-eyed 13-year-old boy pursues a friendship with her, he stumbles upon her secret past and is thrust headlong into adulthood.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[456px] rounded-bl-[30px] sm:rounded-bl-[60px]',
    style:
      'w-[180px] sm:w-[360px] h-auto sm:h-[456px] rounded-bl-[30px] sm:rounded-bl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image6.svg',
    width: '456px',
    height: '280px',
    title: 'RAMPRASAD KI TEHRVI',
    description:
      "After Ramprasad's untimely demise, his family comes together under one roof for a period of thirteen days.",
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image7.svg',
    width: '456px',
    height: '640px',
    title: 'GULAB GANG',
    description:
      'Rajjo runs a gang that strives to uplift the downtrodden and combat injustice in the village. When a corrupt politician runs for the local elections, Rajjo decides to compete against her.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[640px] rounded-tl-[30px] sm:rounded-tl-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[640px] rounded-tl-[30px] sm:rounded-tl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image8.svg',
    width: '360px',
    height: '360px',
    title: 'GULAB GANG',
    description:
      'Rajjo runs a gang that strives to uplift the downtrodden and combat injustice in the village.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[180px] sm:w-[360px] h-auto sm:h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image9.svg',
    width: '360px',
    height: '456px',
    title: 'GULAB GANG',
    description:
      'Rajjo runs a gang that strives to uplift the downtrodden and combat injustice in the village. When a corrupt politician runs for the local elections, Rajjo decides to compete against her.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[456px] rounded-bl-[30px] sm:rounded-bl-[60px]',
    style:
      'w-[180px] sm:w-[360px] h-auto sm:h-[456px] rounded-bl-[30px] sm:rounded-bl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/image10.svg',
    width: '456px',
    height: '280px',
    title: 'STANLEY KA DABBA',
    description:
      'It is the newest contribution from the perceptive writer-director, Amole Gupte that throws light on the daily life of a school going child.',
    tags: ['Movie', 'Acting'],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
];

const theatreData = [
  {
    imageURL: '/images/home/contributions/theatre/image1.svg',
    width: '456px',
    height: '280px',
    title: '',
    description: '',
    tags: [],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
  {
    imageURL: '/images/home/contributions/theatre/image2.svg',
    width: '456px',
    height: '640px',
    title: '',
    description: '',
    tags: [],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[640px] rounded-bl-[30px] sm:rounded-bl-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[640px] rounded-bl-[30px] sm:rounded-bl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/theatre/image3.svg',
    width: '360px',
    height: '360px',
    title: '',
    description: '',
    tags: [],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[180px] sm:w-[360px] h-auto sm:h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
  {
    imageURL: '/images/home/contributions/theatre/image4.svg',
    width: '360px',
    height: '456px',
    title: '',
    description: '',
    tags: [],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[456px] rounded-bl-[30px] sm:rounded-bl-[60px]',
    style:
      'w-[180px] sm:w-[360px] h-auto sm:h-[456px] rounded-bl-[30px] sm:rounded-bl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/theatre/image5.svg',
    width: '456px',
    height: '280px',
    title: '',
    description: '',
    tags: [],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[280px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
  {
    imageURL: '/images/home/contributions/theatre/image6.svg',
    width: '456px',
    height: '640px',
    title: '',
    description: '',
    tags: [],
    containerStyle:
      'min-w-[228px] min-h-auto sm:min-w-[456px] sm:min-h-[640px] rounded-tl-[30px] sm:rounded-tl-[60px]',
    style:
      'w-[228px] sm:w-[456px] h-auto sm:h-[640px] rounded-tl-[30px] sm:rounded-tl-[60px]',
  },
  {
    imageURL: '/images/home/contributions/theatre/image7.svg',
    width: '360px',
    height: '360px',
    title: '',
    description: '',
    tags: [],
    containerStyle:
      'min-w-[180px] min-h-auto sm:min-w-[360px] sm:min-h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
    style:
      'w-[180px] sm:w-[360px] h-auto sm:h-[360px] rounded-tr-[30px] sm:rounded-tr-[60px]',
  },
];

const removePx = (value: string): number => {
  return parseInt(value.replace('px', ''), 10);
};

const Contributions = (props: Props) => {
  const [contributionData, setcontributionData] = useState(filmData);
  // const [mode, setMode] = useState('Film');
  const [active, setActive] = useState(0);
  const [hover, sethover] = useState(false);
  const [currentID, setCurrentID] = useState(-1);
  const ref = useRef<any>(null);
  const journalRef = useRef(null);

  useEffect(() => {
    if (active === 0) {
      setcontributionData(filmData);
    } else if (active === 1) {
      setcontributionData(theatreData);
    } else {
      setcontributionData(filmData);
    }
  }, [active]);

  return (
    <div
      id="work"
      className="relative w-full min-h-[70vh] md:min-h-screen bg-black py-8 md:py-16 border-none"
    >
      <div className="absolute w-full top-20 md:top-40 z-10 flex flex-col justify-center items-start">
        <div className="relative w-[75%] flex flex-col justify-start items-start mx-auto">
          <SubHeading>My Works</SubHeading>
          <Heading>
            Not<span className="font-licorice text-pink">a</span>ble{' '}
            <span className="font-licorice text-pink">C</span>ontri
            <span className="font-licorice text-pink">b</span>utions
          </Heading>
          <div className="hidden md:block flex flex-col justify-center items-center absolute right-0 top-0">
            <div className="grid grid-cols-3">
              {categoryData.map((category, id) => (
                <div
                  onClick={() => setActive(id)}
                  key={id}
                  className={`${
                    id === active ? `bg-pink` : `bg-transparent`
                  } text-center px-2 lg:px-4 py-1.5 lg:py-2.5 text-sm lg:text-xl text-white mr-2 mt-2 uppercase border-2 border-[#6C6C73] hover:cursor-pointer ${
                    category.style
                  }`}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-start w-[75%] mx-auto">
          <div className="grid grid-cols-3">
            {categoryData.map((category, id) => (
              <div
                onClick={() => setActive(id)}
                key={id}
                className={`${
                  id === active ? `bg-pink` : `bg-transparent`
                } text-center font-chillax px-2 lg:px-4 py-1.5 lg:py-2.5 text-sm lg:text-xl text-white mr-2 mt-2 uppercase border-2 border-[#6C6C73] hover:cursor-pointer ${
                  category.style
                }`}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-52 sm:mt-80">
        <Draggable innerRef={journalRef} rootClass={'drag'}>
          <div
            className="flex flex-row overflow-x-scroll sm:overflow-x-hidden mx-auto h-full w-full justify-start items-end"
            ref={journalRef}
          >
            {contributionData.map((image, id) => (
              <div
                key={`${id}-${active}-${image.imageURL}`}
                onMouseEnter={() => {
                  sethover(true);
                  setCurrentID(id);
                }}
                onMouseLeave={() => {
                  sethover(false);
                  setCurrentID(-1);
                }}
                className={`card relative mx-1 sm:mx-4 ${image.containerStyle} overflow-hidden flex justify-center items-end`}
              >
                {/* {id} */}
                <Image
                  src={image.imageURL}
                  alt="contribution"
                  width={removePx(image.width)}
                  height={removePx(image.height)}
                  className={`object-cover ${image.style} cardZoomEffect ${
                    hover && id === currentID
                      ? 'scale-125 grayscale-0'
                      : 'scale-100 grayscale'
                  } overflow-hidden`}
                />

                {active !== 1 && (
                  <>
                    <div
                      className={`info absolute z-30 flex flex-col justify-end items-start p-10 text-white opacity-0 transform translate-y-8 transition ease-out duration-500`}
                    >
                      <h1 className="text-lg sm:text-2xl text-pink font-chillax font-medium">
                        {image.title}
                      </h1>
                      <p className="tracking-wide text-sm sm:text-lg mt-2 font-poppins">
                        {image.description}
                      </p>
                      <div className="flex justify-center items-center mt-5">
                        {image.tags.map((tag, index) => (
                          <p
                            key={`${id}-${index}-${tag}`}
                            className="text-pink py-1.5 px-4 border font-medium text-xs sm:text-sm border-[#D0D0DB] rounded-[20px] text-center mr-2"
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 transition ease-out duration-500"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Contributions;
