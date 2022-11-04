// Code Keypad Component Here

function Keypad (props){
    const handleInput = () => {
        console.log('Entering password...');
    }
    return (
        <div>
           <input onChange={handleInput}
            type = "password"

           />
        </div>
    )
}

export default Keypad;