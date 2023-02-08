import { useState } from "react";
import Switch from "react-switch";

export const Switcher = ({ checked, handleChange }) => {
    const [checkedValue, setChecked] = useState(checked);
    const handleChangeValue = (value) => {
        setChecked(value);
        handleChange();
    }

    return (
        <Switch 
            className="switcher"
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={val => handleChangeValue(val)} 
            checked={checkedValue} 
            onColor="#18D26E"
        />
    )
}