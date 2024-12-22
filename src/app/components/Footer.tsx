import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-t from-secondry">
        <Image
          className=" absolute opacity-20"
          src="/diestaLogo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <div>hello</div>
      </div>
    </footer>
  );
};

export default Footer;
