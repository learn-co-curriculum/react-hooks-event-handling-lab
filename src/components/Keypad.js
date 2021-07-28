// Code Keypad Component Here
import React from 'react'

const changeHandler = () => {
    console.log('Entering password...')
}
function Keypad() {
    return (
        <div>
            <input type="password" onChange={changeHandler}/>
        </div>
    )
}

export default Keypad
