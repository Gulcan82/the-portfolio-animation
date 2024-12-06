import gulcanpicture from "@/public/pics/gulcan.png";
import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <figure>
      <Image
        src={gulcanpicture}
        alt={"Guelcan Kamat"}
        sizes="(min-width: 768px) 90vw, 75vw"
        quality={100}
        className="rounded-lg"
        placeholder="blur"
      />
    </figure>
  );
}
