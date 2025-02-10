import React from "react";

import Image from "next/image";

import SectionHeader from "@/app/components/home/section-header";
import Heading from "@/app/components/shared/heading"

import PictureFive from "@/app/assets/pngs/jpeg-optimizer_7557cda1e32882648d3615337d075753.png";
import PictureSeven from "@/app/assets/pngs/zipkod-phone.png";
import PictureEight from "@/app/assets/pngs/arriving-notification.png";
import PictureNine from "@/app/assets/pngs/phones.png";
import PictureTen from "@/app/assets/pngs/moove.png";

const ArrowIcon = () => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path
        d="M8.40646 7.44706L18.4297 7.44706L18.4297 17.4703M17.7336 8.14312L7.57119 18.3056"
        stroke="currentColor"
        stroke-width="2.1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const RecentWork = () => {
  const recentWorkCards = [
    {
      picturePath: PictureSeven,
      date: "2024",
      header: "Zipkod Logistics",
      badgeOne: "Branding",
      badgeTwo: "Web development",
      badgeThree: "App development",
    },
    {
      picturePath: PictureEight,
      date: "2023",
      header: "Tribevibe",
      badgeOne: "Branding",
      badgeTwo: "Web development",
      badgeThree: false,
    },
    {
      picturePath: PictureFive,
      date: "2024",
      header: "Sunk",
      badgeOne: "Web development",
      badgeTwo: false,
      badgeThree: false,
    },
    {
      picturePath: PictureNine,
      date: "2023",
      header: "Kodest Invest",
      badgeOne: "Web development",
      badgeTwo: "App development",
      badgeThree: false,
    },
    {
      picturePath: PictureTen,
      date: "2023",
      header: "Moove",
      badgeOne: "App development",
      badgeTwo: false,
      badgeThree: false,
    },
  ];

  return (
    <section className="mb-24 sm:mb-[120px]">
      <div className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px]">

        <SectionHeader
          header="RECENT WORK"
          subHeader="Where Your Challenges Become Our Creative Playground."
        />

        <div>
          {recentWorkCards.map((recentWorkCard, index) => (
          <div key={ index } className="lg:border-b lg:border-b-[#C6C6C6] lg:hover:border-none">
            <div
              key={index}
              className="group rounded-2xl border border-[#C6C6C6] bg-[#F3F3F3] hover:rounded-3xl hover:bg-[#4795FF] hover:border-none sm:rounded-[32px] lg:border-none lg:bg-white py-4 sm:py-6 lg:py-9 mb-6 lg:mb-0"
            >
              <div className="w-[90%] mx-auto sm:w-[93.89%] lg:w-[94.82%]">

                <div className="h-[400px] rounded-[10px] mb-8 sm:h-[485px] sm:mb-12 sm:rounded-3xl lg:hidden">
                  <Image
                    src={recentWorkCard.picturePath}
                    alt=""
                    className="w-full h-full rounded-[10px] object-cover sm:rounded-3xl"
                  />
                </div>

                <div className="flex justify-between items-start lg:items-center mb-4">

                  <div className="sm:flex sm:gap-x-10 sm:items-start lg:gap-x-14">

                    <div className="hidden sm:block sm:text-base sm:leading-4 sm:text-[#363636] sm:group-hover:text-white">
                      {recentWorkCard.date}
                    </div>

                    <div>

                      <Heading as="div" className="text-2xl leading-6 text-[#363636] group-hover:text-white sm:text-5xl sm:leading-[48px] mb-4" text="">
                        {recentWorkCard.header}
                      </Heading>

                      <div className="flex gap-x-1 items-center opacity-80 mb-1 sm:mb-0">

                        <Badge text={recentWorkCard.badgeOne} style="" />

                        <Badge
                          text={recentWorkCard.badgeTwo}
                          style={`${!recentWorkCard.badgeTwo && "hidden"}`}
                        />

                        <Badge
                          text={recentWorkCard.badgeThree}
                          style={`hidden sm:block ${
                            !recentWorkCard.badgeThree && "sm:hidden"
                          }`}
                        />

                      </div>

                      <Badge
                        text={recentWorkCard.badgeThree}
                        style={`${
                          !recentWorkCard.badgeThree
                            ? "hidden"
                            : "inline-block"
                        } sm:hidden`}
                      />

                    </div>

                  </div>

                  <div className="hidden sm:w-[42px] sm:h-[42px] sm:flex sm:justify-center sm:items-center sm:border sm:border-[#C6C6C6] sm:rotate-45 sm:rounded-full sm:text-[#C6C6C6] sm:transition-all sm:duration-300 sm:group-hover:bg-white sm:group-hover:text-[#151313] sm:group-hover:border-none sm:group-hover:-rotate-12">
                    <ArrowIcon />
                  </div>

                  <span className="text-sm leading-[14px] text-[#363636] group-hover:text-white sm:hidden">
                    {recentWorkCard.date}
                  </span>

                </div>

              </div>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
};

interface IBadgeProps {
  text: string | boolean;
  style: string;
}

const Badge = (props: IBadgeProps) => {
  const { text, style } = props;

  return (
    <div
      className={`rounded-[5px] border border-[#A3A3A3] text-[13px] leading-[15.6px] text-[#A3A3A3] px-[6px] py-1 group-hover:border-white group-hover:text-white sm:px-3 sm:py-2 ${style}`}
    >
      {text}
    </div>
  );
};

export default RecentWork;
