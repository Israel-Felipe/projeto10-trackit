import { useState, useEffect } from "react";
import styled from "styled-components";
import lixo from "../../images/lixo.svg"
import axios from "axios";

export default function Habito ({infosHabito, setListaDeHabitos, listaDeHabitos}) {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    const selecionados = infosHabito.days;

    function deleteHabito(infosHabito) {

    const user = JSON.parse(localStorage.getItem("user"));
    const authAPI = {
        headers: {
        Authorization: `Bearer ${user.token}`
        }
    }

        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${infosHabito.id}`, authAPI);
        promise.then((res) => {
            setListaDeHabitos([...listaDeHabitos], "teste")
        });
        
    }
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
                <img src={lixo} onClick={() => deleteHabito(infosHabito)}></img>
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
    position: relative;

    img {
        width: 13px;
        height: 15px;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
    }
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