import React from 'react'

import Image from "next/image";

import Heading from "@/app/components/shared/heading"

import Arrow from "@/app/assets/svgs/arrow-forward.svg"

const footer = () => {
  const gridItems = [
    { header: "Office", textOne: "De Corridor 12G", textTwo: "Lekki, Lagos" }, 
    { header: "Call line", textOne: "Mel: +31 6 14 97 98 40", textTwo: "Ikenna: +31 6 51 76 07 63" }, 
    { header: "Mail Us", textOne: "info@hephi.io", textTwo: "careers@hephi.io" }, 
    { header: "Follow us", textOne: "Instagram", textTwo: "LinkedIn" },  
  ]

  return (
    <footer>
      <div className="bg-[#4795FF] py-9 sm:w-[94.24%] sm:mx-auto sm:rounded-[36px] lg:max-w-[1391px]">
        <div className="w-[90%] mx-auto sm:w-[93.89%] lg:w-[94.82%]">

          <div className="lg:flex lg:justify-between lg:items-start">

            <Heading as="div" className="text-4xl leading-9 text-white sm:w-[57.04%] sm:text-5xl sm:leading-[48px] lg:w-[31.92%] lg:text-[54px] lg:leading-[54px]" text="">
              We&apos;re excited to bring your next ideas to life
            </Heading>

            <div className="mt-10 rounded-3xl bg-white lg:mt-0 lg:w-[37.91%] py-6 lg:py-9">
              <div className="w-[86.7%] mx-auto sm:w-[93.5%] sm:flex sm:justify-between sm:items-start lg:w-[85.6%] lg:block">

                <div className="sm:w-[51.81%] lg:w-[83.53%]">

                  <Heading as="div" className="text-2xl leading-6 text-[#363636] sm:text-[28px] sm:leading-7 lg:text-[32px] lg:leading-8" text="">
                    Get in touch
                  </Heading>

                  <div className="text-base leading-[19.2px] text-[#6F6F6F] sm:text-xl sm:leading-6 mt-6 lg:mt-4">
                    Are you a brand or company in need of contagiously creative
                    stopping power? Just hit us up!
                  </div>

                </div>

                <button className="h-12	rounded-full px-6 py-3 bg-gradient-to-b from-[#4E98FE] to-[#3283F3] flex gap-x-[10px] items-center mt-14 sm:mt-0 lg:mt-14">

                  <div className="font-bold text-lg leading-[23.4px] text-white lg:text-xl lg:leading-[26px]">
                    Get in touch
                  </div>

                  <Image src={Arrow} width={24} height={24} alt="arrow" />

                </button>

              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10 lg:grid-cols-4 mt-10">
            { gridItems.map((gridItem, index) => (
            <div key={index} className="pt-10">

              <div className="font-bold text-base leading-[19.2px] text-white sm:text-lg sm:leading-[21.6px] lg:text-xl lg:leading-6">
                { gridItem.header }
              </div>

              <div className="text-base leading-[19.2px] text-[#FFFFFFCC] sm:text-lg sm:leading-[21.6px] lg:text-xl lg:leading-6 mt-4">

                <div>{ gridItem.textOne }</div>

                <div className="mt-1">{ gridItem.textTwo }</div>

              </div>

            </div>
            ))}
          </div>

          <div className="font-bold text-base leading-[19.2px] text-white sm:text-lg sm:leading-[21.6px] lg:text-xl lg:leading-6 mt-20">
            General terms
          </div>

        </div>
      </div>
    </footer>
  )
}

export default footer
