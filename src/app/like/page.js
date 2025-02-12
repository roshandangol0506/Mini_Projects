'use client'
import { Button } from '@/components/ui/button'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const Like = () => {
    const [isLiked, setIsLiked] = useState(false)
  return (
    <div>
          <ThumbsUp onClick={()=>setIsLiked(!isLiked)} color={isLiked ? 'blue' : 'black'}/> 
    </div>
  )
}

export default Like