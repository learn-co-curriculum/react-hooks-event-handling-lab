// Code Keypad Component Here
import React from 'react'

function Keypad() {
  return (
    <div>
      <input
      onChange={()=> console.log('Entering password...')} 
      type='password' 
      />
    </div>
  )
}

export default Keypad