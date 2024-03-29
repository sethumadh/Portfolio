import React, { useState, useEffect } from "react"
import Head from "next/head"
import type { NextPage } from "next"
import Image from "next/image"

import { About, Aboutme, Works, Contact, Testimonial } from "../components"
import { images } from "../constants"

const Home: NextPage = () => {
  const [activePage, setActivePage] = useState("Home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setActivePage("Home")
      }
      if (window.scrollY > 75) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className=" min-h-screen scroll-smooth" id="Home">
      <Head>
        <title>Sethu&apos;s Portfolio</title>
        <meta name="description" content="Full Stack Portfolio" />
        <link rel="icon" href="/meteorrain.png" />
      </Head>

      <About setActivePage={setActivePage} />
      <div id="About">
        <Aboutme />
      </div>

      <div id="Works">
        <Works />
      </div>
      <Testimonial />
      <div id="Contact" className="">
        <Contact />
      </div>
    </div>
  )
}
export default Home
