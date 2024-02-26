import { element } from "prop-types";
import React, {useState} from "react";

function Arrays()
{
    const [foods, setFoods] = useState(["Apple", "Orange"]);
    
    function handleAddFood()
    {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => ([...f,newFood]));
    }

    function handleRemoveFood(index)
    {
        setFoods(foods.filter((_, i) => i !== index));
    }
    
    return (
        <div>
            <h2>List Of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name"/>
            <button onClick={handleAddFood}>Add Food</button>
            <br/>
        </div>
    );
}

export default Arrays