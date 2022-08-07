import styled from "styled-components";
import "dayjs/locale/pt-br";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { listaHabitosHoje } from "../../services/services";
import HabitoHoje from "./HabitoHoje";

export default function TelaHoje() {
    
    const dayjs = require('dayjs');
    const weekday = dayjs().locale("pt-br").format("dddd");
    const day = dayjs().locale("pt-br").format("DD/MM");
    const [reload, setReload] = useState(true)
    const [listaDeHabitosHoje, setListaDeHabitosHoje] = useState([]);
    const { percentage } = useContext(UserContext);
    const [percentageColor, setPercentageColor] = useState("#BABABA");

    useEffect (() => { 
    listaHabitosHoje()
    .then((res) => {  
        setListaDeHabitosHoje(res.data)
    })
    .catch(() => {
        alert("Não deu certo, infelizmente");
    });
    }, [reload]);

    function PercentageDone ({setPercentageColor}) {
        const [textPercentage, setTextPercentage] = useState("");
        useEffect (() => {
            if(percentage !== 0 && Number(percentage)) {
                {setTextPercentage(`${percentage}% dos hábitos concluídos`); setPercentageColor("#8FC549")}
            } else {
                setTextPercentage("Nenhum hábito concluído ainda"); setPercentageColor("#BABABA")
            }
        }, [percentage]);

        return (
            <>
            {textPercentage}
            </>
        )
    }

    

    /* Nenhum hábito concluído ainda */
    return (
        <Container>
            <Titulo percentageColor={percentageColor}>
               <h1>{weekday}, {day}</h1>
                <h2><PercentageDone setPercentageColor={setPercentageColor}/></h2>
            </Titulo>

            <ContHabito>
                {listaDeHabitosHoje.map((habito, index) => <HabitoHoje key={index} habito={habito} setReload={setReload} reload={reload}/>)}
            </ContHabito>
            
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
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 18px;
    
    font-size: 23px;
    color: #126BA5;

    h2 {
        color: ${props => props.percentageColor};
        font-size: 18px;
        margin-top: 5px;
    }
`
const ContHabito = styled.div`
    width: 90vw;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`