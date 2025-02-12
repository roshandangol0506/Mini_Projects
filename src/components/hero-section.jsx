import React from 'react'

const HeroSection = (props) => {
  return (
    <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 
    bg-clip-text text-transparent 
    animate-gradient-x
  '>
      {props.title}
    </h1>
  )
}

export default HeroSection