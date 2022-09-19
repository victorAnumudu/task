import React from 'react'

// styled
import { ParagraphStyle } from "./styles/Paragraph.style ";

const Paragraph = ({text, font, time}) => {
  return <ParagraphStyle font={font}>{text} <small>{time}</small></ParagraphStyle>;
}

export default Paragraph