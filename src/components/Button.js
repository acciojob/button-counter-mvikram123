import React,{useState} from "react";



const Button=()=>{
    let[count,setCount]=useState(0)
    

function increase(){
  
    setCount(count+1);
}
    return(

        <div>
             <p>Button clicked me {count} times</p>
                <button onClick={increase}>click me</button>
               
        </div>

    )
}
export default Button;