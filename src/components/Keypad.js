import React from 'react';




function Keypad() {
	
	function handleChange(event) {
		console.log("Entering password...", event.target.value);
	}
		
    return (
      <div>
				<input onChange={handleChange} type="password" placeholder="password" />
			</div>
    )
}

export default Keypad;