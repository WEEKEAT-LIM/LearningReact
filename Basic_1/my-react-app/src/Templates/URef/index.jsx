// useState() => Re-renders the component when the state value changes.
// 
// useRef() => Don't re-renders when value change.
//              - Use when you want a component to remember information
//                but don't re-render
// 
//  1. Accessing/Interacting with DOM elements
//  2. Handling Focus, Animations, and Transitions //局部动画，不会影响整个页面重写渲染
//  3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from "react";

function URef()
{
    const inputRef = useRef(null);

    function handleClick()
    {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "Blue";
    }

    useEffect(()=> {
        console.log("COMPONENT RENDER");
        console.log(inputRef);
    })

    return (
        <>
        <button onClick={handleClick}>
            Click Me
        </button>
        <input ref={inputRef}/>
        </>
    );
}

export default URef