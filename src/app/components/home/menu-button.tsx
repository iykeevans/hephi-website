import React from 'react'

import Image from "next/image"

import Heading from "@/app/components/shared/heading"

import MenuIcon from "@/app/assets/svgs/menu-icon.svg"

const MenuButton = () => {
  return (
    <button className="rounded p-2 bg-white flex gap-x-2 sm:rounded-full sm:justify-center sm:items-center sm:h-10 sm:mr-2">
      <div className="sm:flex sm:gap-x-2">

        <Image src={MenuIcon} width={20.56} height={20.56} alt="Menu Icon" />

        {/* <div className={ `text-lg leading-[21.6px] text-[#2B2B2B]` }>
          Menu
        </div> */}
        <Heading as="div" className="text-lg leading-[21.6px] text-[#2B2B2B]" text="Menu">
          Menu
        </Heading>

      </div>
    </button>
  )
}

export default MenuButton
