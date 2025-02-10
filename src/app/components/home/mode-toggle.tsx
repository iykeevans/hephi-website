import React from 'react'

import Image from "next/image";

import DarkIcon from "@/app/assets/svgs/dark-icon.svg";
import LightIcon from "@/app/assets/svgs/light-icon.svg";

const ModeToggle = () => {
  return (
    <div className="fixed right-4 bottom-4 w-[91px] h-14 rounded-full border border-white flex justify-center items-center dark-mode-toggle-button sm:hidden">
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
  )
}

export default ModeToggle
