import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { images } from "../constants"

function Works() {
  const projectLinks = [
    {
      src: images.vpa_marketing,
      title: "vpaConnect",
      subtitle: "- Vendor Paid Advertising",
      role: "Lead - Full Stack Developer",
      tech: [
        "Next.js 15 - App Router",
        "TypeScript",
        "Tailwind",
        "Clerk Auth",
        "Zustand",
        "MongoDB",
        "Typegoose",
        "Stripe",
        "Zod",
      ],
      body: `The objective is to build a B2B SaaS platform that streamlines vendor-paid advertising for the Australian residential real estate industry. The platform connects real estate agents, agencies, and suppliers — enabling property marketing campaigns to launch immediately through flexible payment models including upfront payments via Stripe, deferred financing through Campaign Flow and Afterpay, and BECS direct debit. Features multi-tenant role-based access control, subscription billing with tiered pricing, multi-party invoice reconciliation, and Australian financial compliance including AML/KYC verification and ABN/GST validation.`,
      liveUrl: "https://vpaconnect.com.au/",
      gitUrl: "",
    },
    {
      src: images.home,
      title: "Bright",
      subtitle: "- School Management Software",
      role: "Full Stack / Co founder / Product Owner & Creator",
      tech: [
        "React Js",
        "Tailwind",
        "Redux Toolkit",
        "Typescript+zod",
        "Express",
        "postgreSql",
        "jwt custom auth",
        "Jest +RTL",
        "Node",
      ],
      body: "Commercial School Management Software for medium strength Schools in Australia .Implement an affordable solution—either custom-built or off-the-shelf—that delivers the necessary functionalities efficiently and securely.Provides a single access point for all essential information about students, teachers, curriculum, and school operations, Enhanced Security Features:Protects personal data and sensitive information from cyber threats with robust security measure. mplemented CI/CD pipeline using git hub actions with self hosted workers with code linting and preview deploys. The Backend is setip using express and the database is based on Postgres db hosted on aws EC2 instance.",
      liveUrl: "https://akaalshaouni.org/login",
      gitUrl: "https://github.com/sethumadh/SLMS-api",
    },

    // {
    //   src: images.famChat,
    //   title: "famChat",
    //   subtitle: "- Social media for family and friends",
    //   role: "Full Stack Developer",
    //   tech: [
    //     "Next js- app router",
    //     "TypeScript",
    //     "Tailwind",
    //     "Clerk Auth",
    //     "Zustand",
    //     "postgres",
    //     "prisma",
    //     "socket.io",
    //   ],
    //   body: `The objective is to code a beautifully designed family/ closed friends chat
    //   application dubbed 'famChat' App. This Application had a time line of 2 weeks time. Implemented CI/CD pipeline with Typescript type-checking, database migration and code linting`,
    //   liveUrl: "https://famchat-production.up.railway.app/",
    //   gitUrl: "https://github.com/sethumadh/famChat",
    // },
  ]
  return (
    <section className={`works bg-white `}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.0 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0.2, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[90%] max-w-7xl mx-auto mt-8 md:mt-12"
      >
        <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
          <div className="mr-3">Featured</div>
          <div className="relative">
            Projects
            <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
          </div>
        </div>
        <div className=" flex flex-col">
          {projectLinks.map((link) => (
            <div
              className="shadow-lg px-8 py-4 border rounded-lg w-full flex flex-col md:flex-row mb-8 "
              key={link.title}
            >
              <div className="flex flex-col w-full md:w-[55%] mb-8 ">
                <h1 className="px-4 md:px-0 md:pr-4 py-2 text-2xl sm:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  {link.title}{" "}
                  <span className="text-xl md:text-2xl">{link.subtitle}</span>
                </h1>
                <h1 className="px-4 md:px-0 md:pr-4 py-2 text-sm md:text-base font-light md:font-semibold tracking-wide text-center  md:text-left">
                  {link.role}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start px-4 md:px-0 md:pr-4 py-2 ">
                  {link.tech.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text  "
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mb-2 md:mb-4 px-4 md:px-0 md:pr-4 py-2">
                  <p className="leading-loose tracking-wide">{link.body}</p>
                </div>
                <div className="flex mx-auto items-center justify-between mb-3 md:mb-0 ">
                  <Link
                    href={`/project/${link.title}`}
                    className="mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700  py-2.5 px-3 md:px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Details
                  </Link>
                  <Link
                    href={link.gitUrl}
                    className={`${
                      link.title == "vpaConnect"
                        ? "hidden"
                        : "mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-3 md:px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                    } `}
                  >
                    Github
                  </Link>
                  <Link
                    target={`_blank`}
                    href={link.liveUrl}
                    className={`${
                      link.title == "Bright"
                        ? "hidden"
                        : "mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-3 md:px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                    } `}
                  >
                    Demo
                  </Link>
                </div>
              </div>

              <Link
                href={link.liveUrl}
                target="_blank"
                className=" w-full max-w-xl pb-4 md:py-4 mx-auto my-auto h-full md:w-xl flex items-center "
              >
                <Image src={link.src} alt="music" className="w-full rounded" />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Works
