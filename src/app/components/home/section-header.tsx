import React from 'react'

import Heading from "@/app/components/shared/heading"

interface ISectionHeaderProps {
  header: string,
  subHeader: string
}

const SectionHeader = ( props: ISectionHeaderProps ) => {
  const { header, subHeader } = props

  return (
    <div className="sm:flex sm:justify-between sm:items-start mb-10">

      <Heading as="div" className="text-base leading-[19.2px] text-[#2B2B2B] lg:text-xl lg:leading-6 mb-6">
        { header }
      </Heading>

      <Heading as="div" className="text-[32px] leading-[32px] text-[#363636] sm:w-[63.61%] lg:w-[35.95%] lg:text-5xl lg:leading-[48px]">
        { subHeader }
      </Heading>

    </div>
  )
}

export default SectionHeader
