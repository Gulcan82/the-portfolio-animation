import React from "react";
import Image from "next/image";
import tsIcon from "@/public/svgs/ts.svg";
import reactIcon from "@/public/svgs/react.svg";
import postgresIcon from "@/public/svgs/postgres.svg";
import nodejsIcon from "@/public/svgs/nodejs.svg";
import mongodb from "@/public/svgs/mongodb.svg";
import tailwind from "@/public/svgs/tailwind.svg";

export default function TechIcons() {
  return (
    <>
      <Image
        alt="TS Icon"
        src={tsIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Node.js Icon"
        src={nodejsIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="React Icon"
        src={reactIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      
      <Image
        alt="PostgreSQL Icon"
        src={postgresIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="MongoDB Icon"
        src={mongodb}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="TailwindCSS Icon"
        src={tailwind}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
       
    </>
  );
}
