import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import Habito from "./Habito";

export default function ListaHabitos() {
    const [listaDeHabitos, setListaDeHabitos] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));
    const authAPI = {
        headers: {
        Authorization: `Bearer ${user.token}`
        }
    }

    useEffect (() => {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", authAPI);
    promise.then((res) => {  
        setListaDeHabitos(res.data);
    });
    promise.catch(() => {
        alert("Não deu certo, infelizmente");
    });
    },[]);

    return (
        <ListaBody>
            {listaDeHabitos.length === 0 
            ? <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1> 
            : listaDeHabitos.map((habito, index) => <Habito key={index} infosHabito={habito}/>)}
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
    scrollbar-width: none;
    gap: 10px;
    margin-bottom: 100px;
`