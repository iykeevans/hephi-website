import React from 'react'

import Image from "next/image";

import MenuButton from "@/app/components/home/menu-button"
import Heading from "@/app/components/shared/heading"

import Logo from "@/app/assets/svgs/hephi-logo.svg";
import MenuIcon from "@/app/assets/svgs/menu-icon.svg";
import DarkIcon from "@/app/assets/svgs/dark-icon.svg";
import LightIcon from "@/app/assets/svgs/light-icon.svg";

const NavBar = () => {
  return (
    <>

      <nav className="sm:hidden fixed z-10 top-4 left-4 right-4 nav h-[54px] mx-auto flex justify-between items-center p-2 pl-4">

        <div className="pt-2 pb-2">
          <Image src={ Logo } width={ 100.88 } height={ 19 } alt="Hephi Logo" />
        </div>

        <button className="rounded p-2 bg-white flex gap-x-2">

          <Image src={ MenuIcon } width={ 20.56 } height={ 20.56 } alt="Menu Icon" />

          <Heading as="div" className="text-lg leading-[21.6px] text-[#2B2B2B]">
            Menu
          </Heading>

        </button>

      </nav>

      <nav className="hidden sm:fixed sm:z-10 sm:top-[52px] sm:right-[52px] sm:left-[52px] sm:h-14 sm:flex sm:justify-between sm:items-center lg:right-0 lg:left-0 lg:w-[80%] lg:mx-auto">
        
        <div className="sm:py-2">
          <Image src={ Logo } width={ 100.88 } height={ 19 } alt="Hephi Logo" />
        </div>

        <div className="sm:rounded-full sm:flex sm:gap-x-4 sm:items-center sm:tab-nav-switch sm:bg-[#B1ADAD33]">

          <div className="w-[91px] h-14 rounded-full flex justify-center items-center">
            <div className="relative w-[75px] h-10 rounded-full bg-[#4795FF] border-[2.5px] border-[#EBEBEB] border-opacity-[0.48] flex gap-x-[5px] items-center p-[5px]">

              <Image
                src={DarkIcon}
                width={30}
                height={30}
                alt="Dark Icon"
                className="z-20 rounded-full"
              />

              <Image
                src={LightIcon}
                width={30}
                height={30}
                alt="Dark Icon"
                className="z-20 rounded-full"
              />

              <div className="absolute right-[2.5px] z-10 w-[30px] h-[30px] rounded-full bg-[#EBEBEB]"></div>

            </div>
          </div>

          <MenuButton />

        </div>

      </nav>

    </>
  )
}

export default NavBar
