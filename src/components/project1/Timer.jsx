import React, { useState, useRef, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(10);
    const [isActive, setIsActive] = useState(false)
    let timer = useRef(null)
    function startTimer(){
        if(!isActive ){
         timer.current =setInterval(()=>{
            setSeconds(seconds=>seconds>0?seconds-1:seconds)
        }, 1000) 
        setIsActive(true)
        }
    }
    function stopTimer(){
        setIsActive(false)
        clearInterval(timer.current)
    }
    function reset(){
        stopTimer()
        setSeconds(10)
    }
    

    return (
        <div>
            <button onClick={() => startTimer()}>Start Timer</button>
            <button onClick={()=>reset()}>Reset</button>
            <button onClick={() => stopTimer()}>Stop Timer</button>
            <p>Seconds: {seconds}</p>
        </div>
    );
}

export default Timer;
