import React, {useState, useEffect} from "react";

// ()={} ::每次渲染都执行
// ()={},[] ::只在挂载上运行
// ()={},[v1, v2] :: 当变量改变时执行（trigger）

function Effect2()
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(()=> {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED")

        return ()=>{
            window.removeEventListener("resize", handleResize);
        }
    },[width, height])
    
    useEffect(()=> {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])


    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return (<>
    <p>Window Width: {width}</p>
    <p>Window Height: {height}</p>
    </>);
}

export default Effect2