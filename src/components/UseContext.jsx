import React from "react"
import { useState, useEffect } from "react";
import "./UseContext.css"
function UseContext(){
    const [timer,setNumber] = useState(0)
    const [value,setValue] = useState(1000)
    useEffect(() => {
       const timers = setInterval(() => {
            setNumber(prevTimer => prevTimer + 1);
        },value)
        return () => {
           clearInterval(timers)
        }
    }, [value]);
 return(
     <div className="context">
        <h1>{timer}</h1>
         <button onClick={() => setValue(100)}>100ms</button>
         <button onClick={() => setValue(50)}>50ms</button>
         <button onClick={() => setValue(1000)}>start</button>
     </div>
 )
}

export default  UseContext
