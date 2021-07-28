// Code EyesOnMe Component Here
import React from 'react'

const focusHandler = () => {
    console.log('Good!')
}

const blurHandler = () => {
    console.log('Hey! Eyes on me!')
}


function EyesOnMe() {
    return (
        <div>
            <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe
