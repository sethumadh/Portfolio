import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import Link from "next/link"

import { useScrollDirection } from "./hook/useScrollDirection"
import LineGradient from "./LineGradient"

type NavbarProps = {
  activePage: string
  setActivePage: Dispatch<SetStateAction<string>>
  isTopOfPage: boolean
}
const links = ["Home", "About", "Works", "Resume", "Contact"]
const navLinks = [
  { nav: "Home", href: "Home" },
  { nav: "About", href: "About" },
  { nav: "Works", href: "Works" },
  // {
  //   nav: "Resume",
  //   href: "https://drive.google.com/file/d/1tNqDeQeD45kZor374PvtV2qlnD1ZeTer/view?usp=sharing",
  //   target: "_blank",
  // },
  { nav: "Contact", href: "Contact" },
]

function Navbar({ activePage, setActivePage, isTopOfPage }: NavbarProps) {
  const scrollDirection = useScrollDirection()
  const [toggleMenu, setToggleMenu] = useState(false)
  const dynamicNavbarBG = !isTopOfPage
    ? "[#FFFAE9] shadow-xs shadow-slate-400 "
    : ""
  console.log(scrollDirection)

  return (
    <motion.nav
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0 },
      }}
      className={`navbar font-mulish bg-gray-900 h-[70px] md:h-[70px] flex flex-row justify-end items-center backdrop-blur-lg fixed top-0 right-0 left-0 z-20 md:py-4 bg-${dynamicNavbarBG} ${
        scrollDirection == "down" && !toggleMenu
          ? "-top-28 md:-top-28"
          : "top-0"
      } transition-all duration-750`}
    >
      <div className="w-[95%] max-w-7xl flex flex-row items-center justify-between mx-auto relative">
        <Link
          className="signature text-white md:text-6xl text-4xl font-playfair font-semibold cursor-pointer"
          href="/"
          // smooth={true}
          // offset={50}
          // duration={500}
        >
          <div className="font-mada text-3xl relative">
            Sethu
            <div className=" h-[10.5px] w-[100%] bg-orange-500 absolute right-0 bottom-1 -z-30"></div>
          </div>
        </Link>
        <ul className="links hidden w-full md:flex md:flex-row md:items-center md:justify-end  ">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="font-mada  text-white xl:pl-20 lg:pl-16 md:pl-12 cursor-pointer capitalize font-medium tracking-[2px] hover:scale-110 transition duration-250 text-2xl"
            >
              <Link
                href={`${
                  link.nav != "Resume" ? `/#${link.href}` : `${link.href}`
                }`}
                // target={link.target}
                // smooth={true}
                // offset={-100}
                // duration={500}
                className=""
              >
                <div className=" relative">
                  {link.nav}
                  <div className=" ">
                    <LineGradient width={"w-full"} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {!toggleMenu && (
          <FaBars
            size={30}
            className="burgerMenu md:hidden cursor-pointer text-white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <div
            style={{ background: "orange" }}
            className="sidebar text-white  md:hidden flex flex-col fixed top-0 z-20 right-0 bottom-0 min-h-screen  w-[200px] p-2 bg-mainbg1 bg-repeat "
          >
            <div className="cursor-pointer z-20 text-slate-700 flex justify-end">
              <FaTimes size={30} onClick={() => setToggleMenu(!toggleMenu)} />
            </div>

            <ul className="mt-4 flex flex-col space-y-6 cursor-pointer">
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className=" cursor-pointer capitalize font-bold hover:scale-105 duration-250 z-20 "
                >
                  <Link
                    href={`${
                      link.nav != "Resume" ? `/#${link.href}` : `${link.href}`
                    }`}
                    // target={link.target}
                    onClick={() => {
                      setToggleMenu(!toggleMenu)
                    }}
                  >
                    {link.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
