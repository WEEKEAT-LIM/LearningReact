import styles from './Button.module.css'

function Button()
{
    let count = 0;
    const handleClick = (name) => {
        if (count < 3)
        {
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else
        {
            console.log(`${name} stop clicking me!`)
        }
    };
    const handleClick2 = (name) => console.log(`${name} OK`);

    const handleClick3 = (e) => {
        e.target.textContent = "OUCH! 😒";
        console.log(e);
    };

    return (
        <button className={styles.button} onDoubleClick={(e)=>handleClick3(e)}>Click Me</button>
    );
}

export default Button