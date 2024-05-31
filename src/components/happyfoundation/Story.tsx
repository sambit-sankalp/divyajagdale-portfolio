'use client';
import React, { useState } from 'react';
import Heading from '../shared/happyfoundation/Heading';
import Image from 'next/image';
import Paragraph from '../shared/happyfoundation/Paragraph';

type Props = {};

const storyData = [
  'Divya Jagdale is an actor, writer and a theatre personality.  She has acted in movies and on stage. She was married to Shiv Subrahmanyam who was an award winning screenwriter, a playwright and  an actor. He was a prolific writer who wrote across all mediums. ',
  'On 2016, their son was diagnosed with a left frontal ependymoma brain tumor at the age of 10.  The next few years went by living it up and looking at life from a new perspective and indeed it was a full life filled with fun, laughter, joy and food that brings comfort and happiness. Multiple surgeries later Jahaan moved on to a better place in  feb’22  leaving behind his mom and dad grieving.  Tragedy struck again when within 2 months of Jahaans passing Shiv passed away of pancreatic cancer unexpectedly .As if this was not enough, another tragedy struck Divya. After two months she lost her father quite suddenly.',
  'The triple tragedy has made her more committed and resilient towards living life to the fullest.',
  'Divya did not allow her spirit to buckle under the weight of the grief and has resolved to bring comfort foods, Joy and laughter to many homes and families. Food brings people together is her philosophy.',
];

const Story = (props: Props) => {
  const [hover, sethover] = useState(false);
  const paraStyle = 'my-2';

  return (
    <div className="min-h-screen w-[90%] md:w-[75%] mx-auto flex flex-col justify-center items-center pt-24">
      <div className="w-full flex justify-center items-center">
        <div className="w-[20%] min-h-screen h-full flex justify-start items-start mt-20">
          <Image
            src="/images/happyfoundation/decor.svg"
            height={240}
            width={80}
            alt="decor"
            className="w-[40px] sm:w-[80px] h-auto"
          />
        </div>
        <div className="w-[80%]">
          <Heading className="">
            Our Sto
            <span className="inline-flex justify-center items-center h-fit mt-2">
              <Image
                src="/images/happyfoundation/feather.png"
                alt="hero"
                width={72}
                height={72}
                className="w-auto h-[28px] md:h-[50px] lg:h-[65px]"
              />
            </span>
            y
          </Heading>
          <div className="w-full flex flex-col justify-center items-center mt-6">
            {storyData.map((data, index) => (
              <Paragraph key={index} className={paraStyle}>
                {data}
              </Paragraph>
            ))}
            <Paragraph className={paraStyle}>
              After the passing of Shiv, i put together a tribute to him,{' '}
              <span className="text-pink font-licorice text-[20px] sm:text-[36px]">
                ‘for you Shiv...’
              </span>{' '}
              on this birthday celebrating his life’s work in the theatre. The
              proceeds from the ticket sales were forwarded to Tata memorial
              hospital towards research for finding solutions for children with
              brain tumor. It is my intention that all the money generated from
              Shiv’s life’s work will be contributed 100% towards finding a cure
              and bringing joy in the lives for the children with similar
              condition.
            </Paragraph>
            <Paragraph className={paraStyle}>
              I believe that if not in my life time or in the lifetime of the
              next generation, but surely an answer to this condition called
              cancer will emerge in the future and will become as simple as
              popping a pill for common cold. I truly believe that and shall
              continue to be of help.
            </Paragraph>
          </div>
        </div>
      </div>
      <Image
        src={'/images/happyfoundation/familyColor.svg'}
        alt="photo"
        width={1124}
        height={650}
        className="w-full h-auto mt-6 saturate-0 contrast-100 opacity-50 hover:filter-none hover:opacity-100 transition-all duration-500 ease-in-out"
        // onMouseEnter={() => sethover(true)}
        // onMouseLeave={() => sethover(false)}
      />
    </div>
  );
};

export default Story;
