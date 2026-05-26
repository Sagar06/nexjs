import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <Link href={"/contact"}>Go to contact</Link>
      <br />
      <Link href={"/products/sagund"}>Go to product</Link>
      <Image 
      src={'/globe.svg'}
      width={200}
      height={250}
      alt="picture of globe"
       />
    </div>
  );
};

export default AboutPage;
