import React, {useRef, useState} from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const increment = useRef(null);
    const handleStart = () => {
        // if(interval != undefined) clearInterval(interval);  
       setRunning(true);

          

        increment.current = setInterval(()=> {
            
            setTime(prevTime=> prevTime+1);
            console.log("Hello BHai");
        }, 1000)
    }

    const handleStop = ()=> {
        setRunning(false);
        clearInterval(increment.current);
    }

    const handleReset = ()=> {
        setRunning(true);
        setTime(0);
    }

    return (<div>
        <div>
            <button onClick={handleStart}>Start</button>
            <br/>
            <button onClick={handleStop}>Stop</button>
            <br/>
            <button onClick={handleReset}>Restart</button>
            <br/>
        </div>
        <div>{time}</div>
    </div>)
}

export default StopWatch;