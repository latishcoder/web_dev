import React from 'react'
import AboutMetext from './AboutMetext'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
      <div>
        <AboutMetext />
      </div>
      <div>
        <AboutMeImage />
      </div>
    </div>
  )
}

export default AboutMeMain