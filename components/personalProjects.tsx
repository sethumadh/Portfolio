import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { images } from "../constants"

type Props = {}

function personalProjects({}: Props) {
  const projectLinks = [
    // {
    //   src: images.lyrikslt,
    //   title: "Lyriks",
    //   subtitle: "- Modern Music Player",
    //   role: "Front End Next Js Developer/Team Lead",
    //   tech: [" Next Js", "Tailwind", "Redux Toolkit", "Redux Toolkit Query"],
    //   body: "Assembled and lead a team of 3 to create the core functionalities of the Music Player App and integrate third part APIs called Bug Hunter Lyriks app. The goal is to fetch as much APIs and put it into a well-designed web application.Implemented CI/CD pipeline with code linting and preview deploys.",
    //   liveUrl: "https://bughunters-lyriks.vercel.app/",
    //   gitUrl: "https://github.com/sethumadh/Modern-Music-Player",
    // },
    // {
    //   src: images.filmpirelt,
    //   title: "Filmpire",
    //   subtitle: "- World of Movies",
    //   role: "Front End React Js Developer",
    //   tech: ["React Js", "MUI", "Redux Toolkit", "Redux Toolkit Query"],
    //   body: "A Solo project to create core features and integrate third party APIs. Implemented CI/CD pipeline with code linting and preview deploys",
    //   liveUrl: "https://willowy-nougat-2d34e6.netlify.app/",
    //   gitUrl: " ",
    // },
    // {
    //   src: images.morentlt,
    //   title: "Morent",
    //   subtitle: "- Modern Car Rental Application",
    //   role: "Full Stack Developer",
    //   tech: [
    //     "MERN",
    //     "TypeScript",
    //     "Stripe for payments",
    //     "Google OAuth",
    //     "Styled Components",
    //   ],
    //   body: "A Core Member of a 3 member team responsible for creating core functionalities implemented on a custom designed schema using Mongo DB with back-end created upon Node and Express and using React with tailwind on fron end. Implemented CI/CD pipeline with Typescript type-checking, database migration and code linting",
    //   liveUrl: "#",
    //   gitUrl:
    //     "https://github.com/sethumadh/MORENT_Modern_Car_Rental_Application",
    {
      src: images.passwordapp,
      title: "Password Creator App",
      subtitle: "An App using",
      tech: " React Js, MUI ",
      body: "- An app for generating secure passwords using cryptographically secure pseudo-random number generators.",
      liveUrl: "https://password-creator-ten.vercel.app/",
      gitUrl: "https://github.com/sethumadh/Password-Creator",
    },
  ]
  return <div>personalProjects</div>
}

export default personalProjects
