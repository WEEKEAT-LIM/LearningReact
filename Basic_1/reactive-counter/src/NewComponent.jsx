import React, {useState} from "react";

function NewComponent()
{
    const [name, setName] = useState("");
    const [qty, setQty] = useState(0);
    const [cmt, setCmt] = useState("");
    const [payment, setPmt] =useState();
    const [shp, setShp] = useState("");

    function handleNewChange(event){
        setName(event.target.value);
    }

    function handleQtyChange(event){
        setQty(event.target.value);
    }

    function handleCmtChange(event){
        setCmt(event.target.value);
    }

    function handlePmt(event){
        setPmt(event.target.value);
    }

    function handleShpChange(event){
        setShp(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNewChange} placeholder="Your Name"></input>
            <p>Name: {name}</p>

            <input value={qty} onChange={handleQtyChange} type="number"/>
            <p>Quantity: {qty}</p>

            <textarea value={cmt} onChange={handleCmtChange} placeholder="YOUR COMMENT"/>
            <p>{name} SAY :: {cmt}</p>

            <select value={payment} onChange={handlePmt}>
                <option value="">Select an Option</option>
                <option value="Visa">VISA</option>
                <option value="Mastercard">MASTERCARD</option>
                <option value="Gift card">GIFT CARD</option>
            </select>
            <p>Payment method: {payment}</p>

            <hr/>
            <label>
                <input type="radio" value="Pick Up" 
                checked={shp==="Pick Up"} 
                onChange={handleShpChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery"
                checked={shp==="Delivery"} 
                onChange={handleShpChange}/>
                Delivery
            </label>
            <p>SHIPPING : {shp}</p>
        </div>
    );
}
export default NewComponent