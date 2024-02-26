import React, {useState, useEffect, useRef} from "react";
import Styles from './StopWatch.module.css'

function StopWatch()
{
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime]= useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if (isRunning)
        {
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () =>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start()
    {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop()
    {
        setIsRunning(false);
    }

    function reset()
    {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function pedZero(number)
    {
        return (number < 10?`0${number}`:`${number}`);
    }

    function formatTime()
    {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        return `${pedZero(minutes)} : ${pedZero(seconds)} : ${pedZero(milliseconds)}`;
    }

    return (
    <div className={Styles.StopWatch}>
        <div className={Styles.Display}>
            {formatTime()}
        </div>
        <div className={Styles.Controls}>
            <button onClick={stop}  className={Styles.stopBtn} >STOP</button>
            <button onClick={reset} className={Styles.resetBtn} >RESET</button>
            <button onClick={start} className={Styles.startBtn} >START</button>
        </div>
    </div>
    );
}
export default StopWatch