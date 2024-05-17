import React from 'react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

const socialIcons = [faInstagram, faYoutube, faFacebook, faTwitter];

const Socials = (props: Props) => {
  return (
    <>
      <div className="fixed z-50 left-0 bottom-0 px-3 sm:px-6 py-2 sm:py-4 rounded-tr-[20px] backdrop-filter backdrop-blur-[150px]">
        <h5 className="font-chillax text-sm sm:text-base md:text-[20px] text-white">
          Volunteer Happy Foundation
        </h5>
      </div>
      <div className="fixed z-50 right-0 bottom-0 py-3 sm:py-6 px-2 sm:px-4 rounded-tl-[20px] backdrop-filter backdrop-blur-[100px]">
        <div className="flex flex-col justify-center items-center">
          {socialIcons.map((icon, index) => (
            <div key={index}>
              <FontAwesomeIcon
                icon={icon}
                className="w-4 md:w-7 h-4 md:h-7 text-pink my-1 sm:my-1.5 md:my-3"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Socials;
