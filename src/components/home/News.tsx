'use client';
import React, { useRef, useState } from 'react';
import SubHeading from '../shared/SubHeading';
import Heading from '../shared/Heading';
import Draggable from '../shared/Draggable';
import Image from 'next/image';

type Props = {};

const newsData = [
  {
    imageURL: '/images/home/news/image1.svg',
    width: 360,
    height: 360,
    description: 'Celebs grace a book launch at Prithvi theatre in Juhu',
    positioning: 'items-center',
    textPosition: 'translate-y-[120px] sm:translate-y-[224px]',
    containerStyle:
      'min-w-[180px] sm:min-w-[360px] min-h-[180px] sm:min-h-[360px] rounded-bl-[30px] sm:rounded-bl-[60px]',
    style:
      'w-[180px] h-auto sm:w-[360px] sm:h-[360px] rounded-bl-[30px] sm:rounded-bl-[60px]',
  },
  {
    imageURL: '/images/home/news/image2.svg',
    width: 552,
    height: 180,
    description:
      'Shiv Subramaniam and Divya Jagdale at the Opening of the Cineplay Festival',
    positioning: 'items-start',
    textPosition: 'translate-y-[75px] sm:translate-y-[134px]',
    containerStyle:
      'min-w-[250px] sm:min-w-[552px] min-h-[81px] sm:min-h-[180px] rounded-br-[30px] sm:rounded-br-[60px]',
    style:
      'w-[250px] h-auto sm:w-[552px] sm:h-[180px] rounded-br-[30px] sm:rounded-br-[60px] items-start',
  },
  {
    imageURL: '/images/home/news/image3.svg',
    width: 360,
    height: 360,
    description:
      'Shiv Subramaniam Divya Jagdale at My French Film Festival India 2015',
    positioning: 'items-start',
    textPosition: 'translate-y-[128px] sm:translate-y-[238px]',
    containerStyle:
      'min-w-[180px] sm:min-w-[360px] min-h-[180px] sm:min-h-[360px] rounded-tl-[30px] sm:rounded-tl-[60px]',
    style:
      'w-[180px] h-auto sm:w-[360px] sm:h-[360px] rounded-tl-[30px] sm:rounded-tl-[60px] items-start',
  },
  {
    imageURL: '/images/home/news/image4.svg',
    width: 552,
    height: 180,
    description:
      "Naseeruddin Shah, Jackie Shroff and many at late Shiv Subramaniam's book launch",
    positioning: 'items-end pb-1 sm:pb-10',
    textPosition: 'translate-y-[75px] sm:translate-y-[134px]',
    containerStyle:
      'min-w-[250px] sm:min-w-[552px] min-h-[81px] sm:min-h-[180px] rounded-tl-[30px] sm:rounded-tl-[60px]',
    style:
      'w-[250px] h-auto sm:w-[552px] sm:h-[180px] rounded-tl-[30px] sm:rounded-tl-[60px]',
  },
];

const News = (props: Props) => {
  const journalRef = useRef(null);
  const [hover, sethover] = useState(false);
  const [currentID, setCurrentID] = useState(-1);

  return (
    <div
      id="news"
      className="min-h-[60vh] sm:min-h-screen bg-black pb-10 sm:py-28"
    >
      <div className="w-[75%] flex flex-col justify-start items-start mx-auto">
        <SubHeading>IN THE SPOTLIGHT</SubHeading>
        <Heading>
          N<span className="font-licorice text-pink">E</span>EWS{' '}
          <span className="font-licorice text-pink">&</span> ME
          <span className="font-licorice text-pink">D</span>IA
        </Heading>
      </div>
      <div className="w-full mt-5 sm:mt-10">
        <Draggable innerRef={journalRef} rootClass={'drag'}>
          <div
            className="flex flex-row overflow-x-scroll sm:overflow-x-hidden mx-auto min-h-[300px] sm:min-h-[650px] h-fit w-full justify-start items-start overflow-hidden"
            ref={journalRef}
          >
            {newsData.map((image, id) => (
              <div
                key={id}
                className={`flex min-h-[200px] sm:min-h-[500px] h-full justify-center ${image.positioning}`}
              >
                <div
                  onMouseEnter={() => {
                    sethover(true);
                    setCurrentID(id);
                  }}
                  onMouseLeave={() => {
                    sethover(false);
                    setCurrentID(-1);
                  }}
                  className={`card relative mx-1 sm:mx-4 flex justify-center items-center ${image.containerStyle}`}
                >
                  {/* {id} */}
                  <Image
                    src={image.imageURL}
                    alt="contribution"
                    width={image.width}
                    height={image.height}
                    className={`object-cover ${image.style}`}
                  />
                  <div
                    className={`info absolute z-30 flex flex-col justify-end items-start py-10 px-3 text-white opacity-100 transform ${image.textPosition} transition ease-out duration-500`}
                  >
                    <p className="tracking-wide text-sm sm:text-xl mt-2 font-chillax">
                      {image.description}
                    </p>
                  </div>
                  <div
                    className={`overlay absolute top-0 left-0 w-full h-full bg-pink opacity-0 transition ease-out duration-500 ${image.containerStyle}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default News;
