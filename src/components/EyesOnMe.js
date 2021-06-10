// Code EyesOnMe Component Here



function EyesOnMe(){
    function veryFocus (e){
        console.log('Good!')
    }

    function veryBlurry(e){
        console.log('Hey! Eyes on me!')
    }

    return (
        <button onFocus={veryFocus} onBlur={veryBlurry}>
           Eyes on me
        </button>
    )
}




export default EyesOnMe;