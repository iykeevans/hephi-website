import React from 'react'

import Image from "next/image"

import Heading from "@/app/components/shared/heading"

import HephiH from "@/app/assets/svgs/hephi-h-logo.svg"

import PictureTwo from "@/app/assets/pngs/Union.png"
import BigPictureTwo from "@/app/assets/pngs/logo-with-union.png"

const About = () => {
  return (
    <section className="bg-[#F3F3F3] sm:bg-white pb-4 pt-12 sm:p-0 mb-24 sm:mt-4 sm:mb-[120px]">
      <div className="w-[90%] mx-auto sm:w-[94.25%] lg:max-w-[1391px] lg:h-[563px] lg:flex lg:justify-between">

        <div className="sm:rounded-[42px] sm:border sm:border-[#EBEBED] sm:py-9 sm:bg-[#F3F3F3] lg:w-[41.12%]">
          <div className="sm:w-[90.84%] sm:mx-auto lg:w-[87.41%] lg:h-full lg:flex lg:flex-col lg:justify-between">

            <Heading as="div" className="text-base leading-[19.2px] text-[#2B2B2B] mb-20 sm:mb-40 lg:mb-0">
              ABOUT
            </Heading>
            
            <div>

              <Heading as="div" className="text-[32px] leading-[32px] text-[#363636] mb-6">
                Crafting World-Class Digital Products for All
              </Heading>

              <div className="text-base leading-[19.2px] text-[#6F6F6F] mb-12 sm:mb-0">
                we are driven by a passion for innovation and a commitment to
                excellence. Our mission is to empower businesses and individuals to
                achieve their goals through cutting-edge digital solutions. We
                specialize in crafting creative, advanced, and tailored products that
                resonate with audiences and drive success.
              </div>

            </div>

          </div>
        </div>

        <div className="relative sm:mt-4 lg:mt-0 lg:w-[57.73%]">

          <Image src={PictureTwo} alt="" className="w-full h-[563px] sm:hidden" />

          <Image src={BigPictureTwo} alt="" className="hidden sm:block sm:w-full sm:h-[563px]" />

          <div className="absolute top-0 left-0 w-20 h-20 rounded-xl bg-[#4795FF] border-[0.32px] border-[#EBEBED] flex justify-center items-center sm:hidden">
            <Image 
              src={HephiH} 
              alt=""
              className="w-[33.03px] h-[31.12px] sm:w-[61.41px] sm:h-[57.87px]" 
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
