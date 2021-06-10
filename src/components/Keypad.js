// Code Keypad Component Here


function Keypad(){
    function changeEven(e){
        // console.log(e.target.value)
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={changeEven} />
    )
}


export default Keypad;