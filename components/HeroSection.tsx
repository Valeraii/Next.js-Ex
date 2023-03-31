"use client" // this is a client component
import React from "react"
import Image from "next/image"
import Link from "next/link"
// import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { usePathname } from "next/navigation";
import * as Constants from "../app/constants"

const HeroSection = () => {
  const pathname = usePathname();

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">

          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            priority={true}
            className="rounded-full shadow-2xl"
          />
        </div>
        
          <div className="md:mt-2 md:w-3/5">
          {Constants.selfIntroductionHero}
          {pathname !== "/projects" && (
          <Link
            // to="projects"
            href="/projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            // activeClass="active"
            // spy={true}
            // smooth={true}
            // offset={-100}
            // duration={500}
          >
            Projects
          </Link>
          )}
        </div>
      </div>
      {pathname !== "/" && (
      <>
        <div className="flex flex-row items-center text-center justify-center">
        <HiArrowDown size={35} className="animate-bounce" />
        </div>
      </>
      )}
      <br />
      <br />
    </section>
  )
}

export default HeroSection
