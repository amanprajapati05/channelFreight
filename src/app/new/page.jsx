import React from 'react'
import TruckAnimation2 from '../components/TruckAnimation2'

const page = () => {
  return (
    <>
        <div className='h-screen bg-black'></div>
        <div className='h-screen bg-blue-500'></div>
        <div className='h-screen bg-red-400'></div>
        <div>
          <TruckAnimation2/>
        </div>
    </>
  )
}

export default page