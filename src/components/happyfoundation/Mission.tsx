'use client';
import React, { useState } from 'react';
import Paragraph from '../shared/happyfoundation/Paragraph';
import SubHeading from '../shared/happyfoundation/SubHeading';
import Image from 'next/image';

type Props = {};

const missionData = [
  {
    heading: () => {
      return <></>;
    },
  },
];

const Mission = (props: Props) => {
  const [id, setID] = useState(-1);
  const [hover, setHover] = useState(false);

  const imageStyle = 'h-[30px] md:h-[60px] w-auto';

  return (
    <div className="min-h-screen w-[75%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
        <div
          onMouseEnter={() => {
            setID(0);
          }}
          onMouseLeave={() => {
            setID(-1);
          }}
          className={`transition-all min-h-[250px] md:min-h-[550px] duration-500 ease-out flex justify-center items-center px-[30px] md:pl-[50px] md:pr-[30px] rounded-[30px] md:rounded-[60px] ${
            id === 0 ? 'bg-[#F9B131]' : ''
          }`}
        >
          <SubHeading
            className={`transition-all duration-500 ease-out ${
              id === 0 ? 'opacity-100 text-white' : 'opacity-10'
            }`}
          >
            Our{' '}
            <span className="inline-flex justify-center items-center h-fit">
              V
              <Image
                src="/images/happyfoundation/emojis/eye.png"
                alt="eye"
                width={60}
                height={60}
                className={imageStyle}
              />
              sion
            </span>{' '}
            &{' '}
            <span className="inline-flex justify-center items-center h-fit">
              M
              <Image
                src="/images/happyfoundation/emojis/rocket.png"
                alt="eye"
                width={60}
                height={60}
                className={imageStyle}
              />
              ssion
            </span>
          </SubHeading>
        </div>
        <div className="flex justify-end items-start sm:items-center">
          <Paragraph className="w-full md:w-3/4">
            To empower and improve the quality of life for the children with
            ependymoma cancer and to mobilize resources and build partnerships
            to support and make a tangible impact on the lives of the parents of
            the children affected by cancer as well as to promote research and
            advocacy for this rare disease.
          </Paragraph>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px] mt-8 md:mt-16">
        <div className="order-last md:order-none flex flex-col justify-center items-start">
          <Paragraph className="w-full md:w-3/4">
            Providing a creative and engaging outlet for children who are
            undergoing cancer treatment, and to improve their quality of life by
            promoting self-expression, socialization, and emotional well-being.
          </Paragraph>
          <Paragraph className="w-full md:w-3/4 mt-3">
            Theatre workshops can help children who are hospitalized cope with
            the emotional challenges of medical treatment, such as anxiety,
            depression, and stress, by promoting a sense of self-esteem,
            empowerment, and emotional resilience.
          </Paragraph>
        </div>
        <div
          className={`transition-all duration-500 ease-out flex justify-center items-center min-h-[250px] md:min-h-[550px] px-[30px] md:pl-[60px] md:pr-[20px] rounded-[30px] md:rounded-[60px] ${
            id === 1 ? 'bg-[#7FC8C3]' : ''
          }`}
          onMouseEnter={() => {
            setID(1);
          }}
          onMouseLeave={() => {
            setID(-1);
          }}
        >
          <SubHeading
            className={`transition-all duration-500 ease-out ${
              id === 1 ? 'opacity-100 text-white' : 'opacity-10'
            }`}
          >
            <span className="inline-flex justify-center items-center h-fit">
              Supp
              <Image
                src="/images/happyfoundation/emojis/heart.png"
                alt="eye"
                width={60}
                height={60}
                className={imageStyle}
              />
              rt
            </span>{' '}
            Groups &{' '}
            <span className="inline-flex justify-center items-center h-fit">
              The
              <Image
                src="/images/happyfoundation/emojis/mask.png"
                alt="eye"
                width={60}
                height={60}
                className={imageStyle}
              />
              tre
            </span>{' '}
            Workshops
          </SubHeading>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px] mt-8 md:mt-16">
        <div
          className={`transition-all duration-500 ease-out flex justify-center items-center min-h-[250px] md:min-h-[550px] px-[30px] md:pl-[50px] md:pr-[25px] rounded-[30px] md:rounded-[60px] ${
            id === 2 ? 'bg-[#E84C15]' : ''
          }`}
          onMouseEnter={() => {
            setID(2);
          }}
          onMouseLeave={() => {
            setID(-1);
          }}
        >
          <SubHeading
            className={`transition-all duration-500 ease-out ${
              id === 2 ? 'opacity-100 text-white' : 'opacity-10'
            }`}
          >
            <span className="inline-flex justify-center items-center h-fit">
              Tog
              <Image
                src="/images/happyfoundation/emojis/handshake.png"
                alt="eye"
                width={60}
                height={60}
                className={imageStyle}
              />
              ther
            </span>{' '}
            We Can Make a{' '}
            <span className="inline-flex justify-center items-center h-fit">
              R
              <Image
                src="/images/happyfoundation/emojis/diamond.png"
                alt="eye"
                width={60}
                height={60}
                className={imageStyle}
              />
              al
            </span>{' '}
            Difference
          </SubHeading>
        </div>
        <div className="flex flex-col justify-center items-end">
          <Paragraph className="w-full md:w-3/4">
            We are calling on compassionate individuals like you to join us in
            our mission to create a better world for those in need. Whether you
            are able to contribute through a financial donation or volunteering
            your time and skills, your support can make a significant impact in
            the lives of many.
          </Paragraph>
          <Paragraph className="w-full md:w-3/4 mt-3">
            With your help, we can provide vital resources and support to
            families who are facing challenging circumstances. Every little bit
            counts, and your support can truly make a difference in the lives of
            those who need it most. Thank you for your compassion, generosity,
            and commitment to creating a better world for all.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Mission;
