// Code Keypad Component Here
import React from "react"

function onChange() {
  console.log("Entering password...")
}

function Keypad() {
  return <input type="password" onChange={onChange} />
}

export default Keypad
