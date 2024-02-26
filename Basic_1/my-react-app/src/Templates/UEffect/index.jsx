import React, {useState, useEffect} from "react";

function Effect()
{
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    },[count, color])//[]里面的参数是trigger

    function addCount()
    {
        setCount(c => c +1);
    }

    function subtractCount()
    {
        setCount(c => c - 1);
    }

    function changeColor()
    {
        setColor(c => c ==="green"?"red":"green");
    }

    return (
    <div>
        <p style={{color : color}}>Count : {count}</p>
        <button onClick={addCount}>ADD</button>
        <button onClick={subtractCount}>SUBTRACT</button>
        <button onClick={changeColor}>Change Color</button>
    </div>
    );
}

export default Effect