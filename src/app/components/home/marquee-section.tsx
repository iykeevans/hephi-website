import React from "react"

import Image, { StaticImageData } from "next/image"

import Heading from "@/app/components/shared/heading"

import BubbleCube from "@/app/assets/svgs/bubble-cube.svg" 

import Star from "@/app/assets/pngs/star (1).png"
import Jotter from "@/app/assets/pngs/jotter.png"
import Brain from "@/app/assets/pngs/braain.png"
import Plus from "@/app/assets/pngs/plus.png"

const MarqueeSection = () => {
  const marqueeItems = [
    { text: "Energetic", picturePath: "", pictureWidth: "" },
    { text: "Client-First", picturePath: "", pictureWidth: "" },
    { text: "Creative", picturePath: "", pictureWidth: "" },
    { text: "Innovative", picturePath: "", pictureWidth: "" },
    { text: "Reliable", picturePath: Star, pictureWidth: "48.4" },
    { text: "Dynamic", picturePath: BubbleCube, pictureWidth: "60.5" },
    { text: "Passionate", picturePath: "", pictureWidth: "" },
    { text: "Agile", picturePath: Jotter, pictureWidth: "48.4" },
    { text: "Empathetic", picturePath: "", pictureWidth: "" },
    { text: "Growth partner", picturePath: "", pictureWidth: "" },
  ]
    
  const secondMarqueeItems = [
    { text: "Customer-centric", picturePath: "", pictureWidth: "" },
    { text: "Dedicated", picturePath: "", pictureWidth: "" },
    { text: "Visionary", picturePath: "", pictureWidth: "" },
    { text: "Strategic", picturePath: Brain, pictureWidth: "48.4" },
    { text: "Resourceful", picturePath: Plus, pictureWidth: "48.4" },
    { text: "Expert", picturePath: "", pictureWidth: "" },
    { text: "Transparent", picturePath: "", pictureWidth: "" },
    { text: "Transformative", picturePath: "", pictureWidth: "" },
    { text: "Collaborative", picturePath: "", pictureWidth: "" },
  ]

  return (
    <section className="overflow-x-hidden mb-24 sm:mb-[120px]">

      <Marquee marqueeItems={ marqueeItems } />
      <Marquee marqueeItems={ secondMarqueeItems } />
      <Marquee marqueeItems={ marqueeItems } />
      <Marquee marqueeItems={ secondMarqueeItems } noMarginBottom={ true } />

    </section>
  )
}

interface IMarquee {
  text: string
  picturePath: StaticImageData | string
  pictureWidth?: string
}

interface IMarqueeProps {
  marqueeItems: IMarquee[],
  noMarginBottom?: boolean
}

const Marquee = (props: IMarqueeProps) => {
  const { marqueeItems, noMarginBottom } = props

  return (
    <div className="overflow-hidden flex justify-start">
      <div className={ `marquee h-[60.5px] flex gap-x-[21.19px] items-center ${ ( noMarginBottom ) ? "mb-0" : "mb-[13.7px]" }` }>
        { [ ...marqueeItems, ...marqueeItems ].map( ( marqueeItem, index ) => (
        <div key={ index } className="flex gap-x-[12.1px] items-center shrink-0">

          <Heading as="div" className="text-[24.2px] leading-[29.04px] text-[#6F6F6F] shrink-0">
            { marqueeItem.text }
          </Heading>

          <div className={ `w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9] shrink-0 ${ ( marqueeItem.picturePath ) && "hidden" }` }></div>

          <div className={ `w-[${marqueeItem.pictureWidth}px] h-[60.5px] shrink-0 ${ ( !marqueeItem.picturePath ) && "hidden" }` }>
            <Image
              src={ marqueeItem.picturePath }
              width={ undefined }
              height={ undefined }
              alt=""
              className={ `w-full h-full object-cover ${ ( !marqueeItem.picturePath ) && "hidden" }` }
            />
          </div>

        </div>
        ) ) }
      </div>
    </div>
  )
}

export default MarqueeSection;
