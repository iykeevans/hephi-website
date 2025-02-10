import React from 'react'

import Image from "next/image"

import Heading from "@/app/components/shared/heading"

import Arrow from "@/app/assets/svgs/arrow-forward.svg"

import PictureThree from "@/app/assets/jpegs/7821a48dba989370aabe20e25ad825ee.jpeg"
import PictureFour from "@/app/assets/jpegs/trading-view-photo.jpeg"

import PictureFive from "@/app/assets/pngs/jpeg-optimizer_7557cda1e32882648d3615337d075753.png"
import PictureSix from "@/app/assets/pngs/dna-pic.png"


const ServicesSection = () => {
  const serviceCards = [
    { picturePath: PictureThree, heading: "Product Design", isHover: true }, 
    { picturePath: PictureFour, heading: "Brand Identity Design", isHover: false }, 
    { picturePath: PictureFive, heading: "Web Development", isHover: false }, 
    { picturePath: PictureSix, heading: "Talent Outsourcing", isHover: false }
  ]

  return (
    <section className="mb-24 sm:mb-[120px]">
      <div className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px]">

        <div className="mb-10 sm:mb-20 sm:flex sm:justify-between sm:items-start">

          <Heading as="div" className="text-base leading-[19.2px] text-[#2B2B2B] lg:text-xl lg:leading-6 mb-6">
            SERVICES
          </Heading>

          <Heading as="div" className="text-[32px] leading-[32px] text-[#363636] sm:w-[63.61%] lg:text-5xl lg:leading-[48px] lg:w-[35.95%]">
            Shaping Tomorrow&apos;s Digital Landscape with Unmatched Creativity
            and Precision
          </Heading>

        </div>

        <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-4">
          { serviceCards.map((serviceCard, index) => (
          <div key={ index } className="rounded-3xl bg-[#F3F3F3] pt-4 pb-6 sm:rounded-[32px] sm:pt-6 sm:pb-12 lg:p-0 lg:bg-white">
            <div className="w-[90%] mx-auto sm:w-[93.89%] lg:w-full">

              <div className={ `relative h-[294px] rounded-xl border border-[#EBEBED] sm:h-[593px] sm:rounded-3xl ${(serviceCard.isHover) ? "lg:h-[577px]" : "lg:h-[641px]"} mb-9 lg:mb-6` }>

                <Image
                  src={ serviceCard.picturePath }
                  alt=""
                  className="w-full h-full rounded-xl object-cover sm:rounded-3xl"
                />

                <div className={ `absolute top-4 right-4 w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#151313] sm:top-6 sm:right-6 ${(!serviceCard.isHover && "lg:hidden")}` }>
                  <Image src={ Arrow } width={ 25.2 } height={ 25.2 } alt="" />
                </div>

              </div>

              <Heading as="div" className="text-2xl leading-6 text-[#363636] lg:text-[32px] lg:leading-[32px] mb-2 sm:mb-4">
                { serviceCard.heading }
              </Heading>

              <div className={`text-base leading-[19.2px] text-[#6F6F6F] ${(!serviceCard.isHover && "lg:hidden")} lg:text-xl lg:leading-6`}>
                Turning ideas into innovative, user-centered digital products.
              </div>

            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
  ) 
}

export default ServicesSection
