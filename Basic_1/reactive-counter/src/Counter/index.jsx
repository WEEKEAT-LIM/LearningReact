import React, {useState} from "react"
import styles from './Counter.module.css'

function Counter()
{
    const [count, setCount] = useState(0);

    const increment = () =>
    {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () =>
    {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    const reset = () =>
    {
        setCount(c => c = 0);
    }

    return (
        <div className={styles.counterContainer}>
            <p className={styles.counterDisplay}>{count}</p>
            <br/>
            <button className={styles.counterButton} onClick={decrement}>Decrement</button>
            &nbsp;
            <button className={styles.counterButton} onClick={reset}>Reset</button>
            &nbsp;
            <button className={styles.counterButton} onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter