import React, {useState} from "react";
import styles from './ColorPicker.module.css'

function ColorPicker()
{
    const [color, setColor] =useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <div className={styles.ColorPickerContainer}>
            <h1 className={styles.h1}>Color Picker</h1>
            <div className={styles.ColorDisplay} style={{backgroundColor:color}}>
                <p>Selected Color : {color}</p>
            </div>
            <br/>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker