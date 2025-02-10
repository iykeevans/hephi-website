import React from "react";

import Image from "next/image";

import SectionHeader from "@/app/components/home/section-header";

import ChevronBack from "@/app/assets/svgs/chevron-back.svg";
import ChevronForward from "@/app/assets/svgs/chevron-forward.svg";

const TestimonialSection = () => {
  return (
    <section className="mb-24 sm:mb-[120px] outline outline-1">
      <section className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px]">
        <SectionHeader
          header="TESTIMONIAL"
          subHeader="What Some of Our Clients Say"
        />
      </section>
    </section>
  );
};

export default TestimonialSection;
