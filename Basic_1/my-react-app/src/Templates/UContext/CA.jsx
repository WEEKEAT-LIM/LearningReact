import React,{ useState,createContext } from "react";
import CB from "./CB";

export const UserContext = createContext();

function CA()
{
    const [user, setUser] = useState("KEAT");

    return (<div className="box">
        <h1>Component A</h1>
        <h2>{`HELLO ${user}`}</h2>
        <UserContext.Provider value={user}>
            <CB user={user}/>
        </UserContext.Provider>
    </div>);
}

export default CA