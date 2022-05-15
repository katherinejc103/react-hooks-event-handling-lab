// Code EyesOnMe Component Here
import react from "react";

function EyesOnMe() {
    // const onFocus = focus 
    // const onBlur = blur 
    function handleFocus(){
        return console.log('Good!')
    }
    function handleBlur(){
        return console.log('Hey! Eyes on me!')
    }
    return(
        <>
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </>
    )
}


export default EyesOnMe;