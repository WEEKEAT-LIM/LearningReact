import React, {useState} from "react"

function MyComponent()
{
    const [name, setName] = useState("GUEST");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = ()=> setName("KEAT");
    const updateAge = ()=> setAge(age +1);
    const updateEmployed = () => setIsEmployed(true);

    return (
        <div className="card">
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <br/>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Name</button>
            <br/>
            <p>Is Employed: {isEmployed?"YES":"NO"}</p>
            <button onClick={updateEmployed} >Employed</button>
        </div>
    )
}
export default MyComponent