import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Day({day, idDay, daysSelected, setDaysSelected, isDisabled}) {
        
    const [isSelected, setIsSelected] = useState(false);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedBG, setSelectedBG] = useState("");

    useEffect (() => {

        if (isSelected === true) {
            setDaysSelected([...daysSelected, idDay]);
            setSelectedColor("#FFFFFF");
            setSelectedBG("#CFCFCF")
        } else {
            setDaysSelected(daysSelected.filter((value => value !== idDay)))
            setSelectedColor("#CFCFCF");
            setSelectedBG("#FFFFFF");
        }
    }, [isSelected]);

    return (
        <BoxDay disabled={isDisabled} selectedColor={selectedColor} selectedBG={selectedBG} onClick={() => 
            {isSelected ? setIsSelected(false) : setIsSelected(true)}}>
            <h1>{day}</h1>
        </BoxDay>
    )
}

const BoxDay = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.selectedColor};
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.selectedBG};
`

