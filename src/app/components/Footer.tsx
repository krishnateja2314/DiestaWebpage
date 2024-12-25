import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-gradient-to-t min-h-24 from-secondry text-lg max-md:text-base">
        <span className="flex -z-10 mb-0 justify-center max-md:items-start">
          <Image
            className=" bg-center absolute opacity-15"
            src="/diestaLogo.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </span>
        <div className="flex max-md:flex-col max-md:items-center max-md:justify-center flex-row justify-between">
          <div className="text-center p-2 m-2 flex flex-col items-center">
            <span className="bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
              Follow Us
            </span>
            <div className="p-2 ">
              <a href="https://www.instagram.com/diesta_iith">
                <Image
                  className="m-2"
                  src="/instagram.svg"
                  alt="Instagram"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>

          <div className="text-center p-2 m-2">
            <span className="bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
              Location
            </span>
            <div>
              <p>Indian Institute of Technology Hyderabad</p>
              <p>Yeddumailaram, Telangana 502205</p>
            </div>
          </div>
          <div className="text-center p-2 m-2">
            <span className="bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
              Contact Us
            </span>
            <div>
              <p>phone:</p>
              <p>9100831304</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
