import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/nathaniaria",
    handle: "nathaniaria",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/nathiaria_/",
    handle: "nathiaria_",
  },
];



const title = "NISD - Newsletter";
const description = "Software Engineer, Web Developer and Designer";
const image = "";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "",
    images: [{ url: image }],
    siteName: "NISD - Newsletter",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};