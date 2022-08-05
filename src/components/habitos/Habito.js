import { useState } from "react";
import styled from "styled-components";



export default function Habito ({infosHabito}) {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    const selecionados = infosHabito.days;

        return (
            <BoxHabito>
                <h1>{infosHabito.name}</h1>
                <Week>
                    {week.map((day, index) => {
                    return (
                        <BoxDay key={index} 
                        selectedColor={
                            selecionados.includes(index)
                              ? "#ffffff"
                              : "#CFCFCF"
                          }
                          selectedBG={
                            selecionados.includes(index)
                              ? "#CFCFCF"
                              : "#ffffff"
                          }>
                            <h1>{day}</h1>
                        </BoxDay>

                    )
                    })}
                </Week>
            </BoxHabito>
        )
}
    

const BoxHabito = styled.div`
    width: 100%;
    height: 90px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
`

const Week = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;
`

const BoxDay = styled.div`
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