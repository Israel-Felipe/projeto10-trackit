import styled from "styled-components";
import { useState, useEffect } from "react";

import { listaHabitos } from "../../services/services";
import Habito from "./Habito";

export default function ListaHabitos(reload) {
    const [listaDeHabitosArray, setListaDeHabitosArray] = useState([]);

    useEffect (() => {
    listaHabitos()
    .then((res) => {  
        setListaDeHabitosArray(res.data.reverse());
    })
    .catch(() => {
        alert("Não deu certo, infelizmente");
    });
    }, [listaDeHabitosArray, reload]);

    return (
        <ListaBody>
            {listaDeHabitosArray.length === 0 
            ? <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1> 
            : listaDeHabitosArray.map((habito, index) => <Habito key={index} infosHabito={habito} setListaDeHabitosArray={setListaDeHabitosArray} listaDeHabitosArray={listaDeHabitosArray}/>)}
        </ListaBody>
    )
}


const ListaBody = styled.div`
    width: 90%;
    height: auto;
    color: #666666;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 10px;
    margin-bottom: 100px;
`
