import Image from 'next/image'
import React from 'react'

const HeroIcon = (props) => {
  return (
    <div>
         <Image src="/jatra.jpeg" width={props.width} height={100} alt='logo'/>
    </div>
  )
}

export default HeroIcon