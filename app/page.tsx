import React from "react";
import Intro from "@/components/Pages/Intro";
import { Metadata } from "next";
import { GeistSans } from "geist/font";
export const metadata: Metadata = {
  title: "Furkan Cengiz",
  description: "Furkan Cengiz's personal website and portfolio",
  verification: {
    google: "6MHP_v7v_6AanMTrqnMHnFGPcHO-IcUl2l3tphvqFnM",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      follow: true,
      index: true,
    },
  },
  metadataBase: new URL("https://www.furkancengiz.software"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Furkan Cengiz",
    "Furkan Cengiz Portfolio",
    "Furkan Cengiz Website",
    "Portfolio",
    "Furki",
    "Furki4_4",
    "Developer",
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Furkan Cengiz",
    description: "Furkan Cengiz's personal website and portfolio",
  },
};

export default function Page() {
  return <Intro className={`${GeistSans.className}`} />;
}
