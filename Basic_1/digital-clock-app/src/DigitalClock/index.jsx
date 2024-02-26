import React, {useState, useEffect} from "react";
import styles from './DigitalClock.module.css'

function DigitalClock()
{
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000);

        return () =>{
            clearInterval(intervalId);
        }
    }, []);

    function formatTime()
    {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ?"PM":"AM";

        hours = hours % 12 || 12;

        return `${pedZero(hours)}:${pedZero(minutes)}:${pedZero(seconds)} ${meridiem}`
    }

    function pedZero(number)
    {
        return (number < 10?`0${number}`:`${number}`);
    }

    return (<div className={styles.clockContainer}>
    <div className={styles.clock}>
        <span>{formatTime()}</span>
    </div>
    </div>);
}

export default DigitalClock