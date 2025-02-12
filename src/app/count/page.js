'use client'
import React, { useState } from 'react'

// Virtual DOM -> 
// DOM: tree
// state=> communicates with VIRTUAL DOM
// state-> 
// to create state in function, ----> 
// useState() hook 
//state in React
const Count = () => {
  let [a, setA] = useState(10)
  const changeCount = (changeType)=>{
    switch(changeType){
      case 'dec':
        setA(a-1)
      case 'inc':
        setA(a+1)
      case 'reset':
        setA(0)
    }
  }
  return (
    <div>
      <button onClick={()=>changeCount('dec')}>-</button>
      {a}
      <button onClick={()=>changeCount('inc')}>-</button>
      <button onClick={()=>changeCount('reset')}>reset</button>
    </div>
  )
}

export default Count





// function giveMeChocolate(chocolate, price){

// }


// giveMeChocolate('kitkat',53)
// giveMeChocolate('eclars',53)
// giveMeChocolate('milkybar',42)
