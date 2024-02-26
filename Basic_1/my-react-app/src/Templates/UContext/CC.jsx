import React, {useContext} from "react";
import { UserContext } from "./CA";
import CD from "./CD";

function CC()
{
    const user = useContext(UserContext);
    return (<div className="box">
        <h1>{`Component C ---> ${user}`} </h1>
        <CD/>
    </div>);
}

export default CC