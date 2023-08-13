import React,{useState} from "react";



const Button=()=>{
    let[count,setCount]=useState(1)
    

function increase(){
  
    setCount(count+1);
}
    return(

        <div>
             <p>Button clicked  {count} times</p>
                <button onClick={increase}>Click me</button>
               
        </div>

    )
}
export default Button;