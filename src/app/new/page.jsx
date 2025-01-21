import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


const page = () => {

    const imageRef = React.useRef(null);

    useGSAP({
        
    })

  return (
    <div>
        <div className='flex w-screen h-screen justify-center items-center bg-black'>
            <img ref={imageRef} src="/images/ship2.png" alt="" />
        </div>
    </div>
  )
}

export default page