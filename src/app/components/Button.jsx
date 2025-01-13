import React from 'react'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

const Button = ({bgColor,tColor,text}) => {
  return (
    <div style={
        {
            backgroundColor: bgColor,
            color: tColor
        }
    } className={`${ClashM.className} cursor-pointer flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit bg-[${bgColor}] text-[${tColor}]  px-4 py-2 rounded-full items-center justify-center`}>
        {text} <CaretRight className='w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] sm:w-[3.5vw] sm:h-[3.5vw]' />
    </div>
  )
}

export default Button