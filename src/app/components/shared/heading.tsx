import React, {ReactNode} from 'react'

import { Francois_One } from "next/font/google"

const francoisOne = Francois_One({ weight: "400", subsets: ["latin"] })

interface IHeadingProps {
  text?: string,
  className: string,
  as: string,
  children?: ReactNode
}

const Heading = (props: IHeadingProps) => {
  const { text, className, as, children } = props

  return React.createElement(as || "h1", { className: `${ francoisOne.className } ${ className ? className : "" }` }, text || children)
}

export default Heading
