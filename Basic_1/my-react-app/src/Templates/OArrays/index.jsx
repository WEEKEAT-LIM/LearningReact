import React, {useState} from "react";

function OArrays()
{
    const [cars, setCars] = useState([]);
    const [carYear, setCYear] = useState(new Date().getFullYear());
    const [carMake, setCMake] = useState("");
    const [carModel, setCModel] = useState("");



    function handleAddCar()
    {
        const newCar = {year:carYear, make:carMake, model:carModel};
        setCars(c => [...c, newCar]);
        
        setCYear(new Date().getFullYear());
        setCMake("");
        setCModel("");
    }

    function handleRemoveCar(index)
    {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event)
    {
        setCYear(event.target.value);
    }

    function handleMakeChange(event)
    {
        setCMake(event.target.value);
    }

    function handleModelChange(event)
    {
        setCModel(event.target.value);
    }


    return (
    <div>
        <h2>List Of Car Object</h2>
        <ul>
            {cars.map((car, index) => 
            <li key={index}>{car.year} :: {car.make} :: {car.model} <button onClick={() => handleRemoveCar(index)}>REMOVE</button></li>)}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} placeholder="YEAR"/>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="MAKE"/>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="MODEL"/>
        <button onClick={handleAddCar}>Add Car!</button>
    </div>);
}

export default OArrays