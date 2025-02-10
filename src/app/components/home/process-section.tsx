import React from 'react'

import Image from "next/image"

import Heading from "@/app/components/shared/heading"

import Star from "@/app/assets/pngs/star (1).png"
import Brain from "@/app/assets/pngs/braain.png"
import Jotter from "@/app/assets/pngs/jotter.png"
import Plus from "@/app/assets/pngs/plus.png"

const ProcessSection = () => {

  const processSectionCards = [

    {
      number: "1",
      imageSrc: Star,
      header: "Discovery",
      paragraphText: "We dive deep into understanding your business, goals, and challenges to set the foundation."
    },

    {
      number: "2",
      imageSrc: Brain,
      header: "Strategy & Ideation",
      paragraphText: "Combining research with creative brainstorming, we develop a strategic plan tailored to your vision."
    },

    {
      number: "3",
      imageSrc: Jotter,
      header: "Design & Development",
      paragraphText: "Our team brings your ideas to life, crafting and refining the design and building the digital solution."
    },

    {
      number: "4",
      imageSrc: Plus,
      header: "Review & Refine",
      paragraphText: "We collaborate closely with you to review the work and fine-tune it based on your feedback."
    },
      
    {
      number: "5",
      imageSrc: Star,
      header: "Launch",
      paragraphText: "We launch the final product, ensuring it’s optimized for success from day one."
    },

    {
      number: "6",
      imageSrc: Star,
      header: "Support & Optimization",
      paragraphText: "After launch, we continue to support and enhance your product to keep it aligned with your evolving needs."
    }

  ]

  return (
    <section className="mb-24 sm:mb-[120px]">
      <div className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px]">

        <Heading as="div" className="text-base leading-[19.2px] text-[#2B2B2B] mb-10 sm:text-xl sm:leading-6">
          PROCESS
        </Heading>

        <div className="flex flex-col gap-y-6 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          { processSectionCards.map(( processSectionCard, index ) => (
          <div key={ index } className="relative rounded-3xl bg-[#F3F3F3] py-9">

            <div className="w-[90%] h-[252px] mx-auto flex flex-col justify-between sm:w-[81.10%] sm:h-[368px] lg:w-[83.92%]">

              <div className="w-9 h-9 rounded-full border border-[#363636] flex justify-center items-center text-base leading-4 text-[#363636] z-10">
                { processSectionCard.number }
              </div>

              <div>

                <Heading as="div" className="text-2xl leading-6 text-[#363636] sm:text-[28px] sm:leading-7 lg:text-4xl lg:leading-9">
                  { processSectionCard.header }
                </Heading>

                <div className="text-base leading-4 text-[#363636] sm:text-xl sm:leading-5 mt-6">
                  { processSectionCard.paragraphText }
                </div>

              </div>

            </div>

            <div className="absolute left-[25%] bottom-[53%] w-[44.17%] h-[200px] sm:left-[12.5%] sm:bottom-[47.5%] sm:w-[75.59%] sm:h-[286px]  lg:w-[60.69%] lg:left-[19.65%] lg:bottom-[44%]">
              <Image
                src={processSectionCard.imageSrc}
                alt=""
                width={undefined}
                height={undefined}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
          ))}
        </div>

      </div>
    </section>
  )

}

export default ProcessSection
