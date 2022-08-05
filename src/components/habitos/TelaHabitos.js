import styled from "styled-components";
import { useState } from "react";

import Topo from "../topoEmenu/Topo";
import Menu from "../topoEmenu/Menu";
import AddHabito from "./AddHabito";



export default function TelaHoje() {
    

    const [habito, setHabito] = useState("");
    const [daysSelected, setDaysSelected] = useState([]);
    const [displayAddHab, setDisplayAddHab] = useState("none");

    return (
        <Container>
        <Topo />
            <Titulo>
                <h1>Meus hábitos</h1>
                <div onClick={() => setDisplayAddHab("initial")}>+</div>
            </Titulo>
            
            <AddHabito daysSelected={daysSelected} setDaysSelected={setDaysSelected} habito={habito} setHabito={setHabito} displayAddHab={displayAddHab} setDisplayAddHab={setDisplayAddHab}/>

            <Habitos>
                <h1>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </h1>
            </Habitos>
        <Menu />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`
const Titulo = styled.div`
    margin-top: 70px;
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-size: 23px;
    color: #126BA5;

    div {
        width: 40px;
        height: 35px;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
}
`

const Habitos = styled.div`
    width: 90%;
    color: #666666;
    font-size: 18px;
    line-height: 22px;
`