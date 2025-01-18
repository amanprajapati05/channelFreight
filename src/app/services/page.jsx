import React from 'react'
import Navbar from '../components/Navbar'
import { Clash } from '../../../public/fonts/fonts'
import Services from '../components/Services'

const page = () => {
  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
       
        <Services/>
        </>
  )
}

export default page