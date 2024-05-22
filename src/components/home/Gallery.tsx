import React from 'react';
import SubHeading from '../shared/SubHeading';
import Heading from '../shared/Heading';
import Image from 'next/image';
type Props = {};

const galleryData = [
  {
    width: '80%',
    data: [
      {
        src: '/images/home/gallery/row11.svg',
        alt: 'Portrait 1',
        width: 420,
        height: 478,
        style: 'h-auto w-[420px] rounded-br-[60px]',
      },
      {
        src: '/images/home/gallery/row12.svg',
        alt: 'Portrait 2',
        width: 648,
        height: 478,
        style: 'w-[648px] h-auto rounded-tl-[60px] ml-2 sm:ml-6',
      },
    ],
  },
  {
    width: '80%',
    data: [
      {
        src: '/images/home/gallery/row21.svg',
        alt: 'Portrait 3',
        width: 840,
        height: 478,
        style: 'h-auto w-[840px] rounded-bl-[60px] mr-2 sm:mr-6',
      },
      {
        src: '/images/home/gallery/row22.svg',
        alt: 'Portrait 4',
        width: 420,
        height: 478,
        style: 'w-[420px] h-auto rounded-tl-[60px]',
      },
    ],
  },
  {
    width: '100%',
    data: [
      {
        src: '/images/home/gallery/row31.svg',
        alt: 'Portrait 5',
        width: 420,
        height: 478,
        style: 'h-auto w-[420px] rounded-br-[60px] mr-2 sm:mr-6',
      },
      {
        content:
          '“ It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. “',
        style: 'w-[456px] h-full rounded-tl-[30px] sm:rounded-tl-[60px]',
      },
      {
        src: '/images/home/gallery/row33.svg',
        alt: 'Portrait 6',
        width: 456,
        height: 478,
        style: 'w-[456px] h-auto rounded-br-[60px] ml-2 sm:ml-6',
      },
    ],
  },
];

const Gallery = (props: Props) => {
  return (
    <div className="min-h-screen bg-black pt-10">
      <div className="w-[75%] flex flex-col justify-start items-start mx-auto pb-4 sm:pb-10">
        <SubHeading>My Portraits</SubHeading>
        <Heading>
          <span className="font-licorice text-pink">G</span>allery
        </Heading>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {galleryData.map((row, index) => (
          <div
            key={index}
            className={`w-full flex my-1 sm:my-3 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            } items-center`}
          >
            {row.data.map((data, id) => (
              <div
                key={id}
                className={`${
                  data.content
                    ? 'hidden sm:block w-[456px] h-[478px]'
                    : row.width
                } flex justify-center items-center`}
              >
                {data.src && (
                  <Image
                    src={data.src}
                    width={data.width}
                    height={data.height}
                    alt={data.alt}
                    className={`${data.style}`}
                  />
                )}
                {data.content && (
                  <div
                    className={`flex w-full h-full bg-pink text-white font-chillax justify-center items-center p-1 sm:p-4 text-center ${data.style}`}
                  >
                    <p className="text-sm sm:text-lg lg:text-xl font-chillax w-[65%]">
                      {data.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        <div
          className={`block sm:hidden flex w-full h-full bg-pink text-white font-chillax justify-center items-center p-1 sm:p-4 text-center rounded-tl-[30px]`}
        >
          <p className="text-sm sm:text-lg lg:text-xl font-chillax w-[65%]">
            {galleryData[2].data[1].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
