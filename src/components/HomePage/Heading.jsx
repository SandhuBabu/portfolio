import React from 'react'

const Heading = ({text, size, customClass}) => {
  return (
    <h1
    className={`text-center text-[#fafa1f] text-[${size}] font-bold tracking-[1px] ${customClass}`}
    >{text}</h1>
  )
}

export default Heading