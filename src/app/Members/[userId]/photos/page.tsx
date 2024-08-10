import { CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'
export default function Photos() {
  return (
    <><CardHeader className='text-2xl font-semibold text-primary '>
    das ist ein profile
  </CardHeader>
  <Divider />
  
  <CardBody className=''>
    <video className="w-full" controls
    src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" >
  Your browser does not support the video tag.
</video>
 
    </CardBody></>
  )
}


