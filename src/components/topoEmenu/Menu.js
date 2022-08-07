import styled from "styled-components"
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";

import { listaHabitosHoje } from "../../services/services";

export default function Menu () {
    const [listaDeHabitosHoje, setListaDeHabitosHoje] = useState([]);
    const { percentage, setPercentage, atualizaMenu } = useContext(UserContext);

    useEffect (() => {
        listaHabitosHoje()
        .then((res) => {  
            setListaDeHabitosHoje(res.data)
        })
        }, [atualizaMenu]);
    
        useEffect (() => {
            const filterDone = listaDeHabitosHoje.filter(value => value.done);
            const percentageDone = Math.round((filterDone.length/listaDeHabitosHoje.length)*100);
            setPercentage(percentageDone)
        }, [listaDeHabitosHoje, percentage])

    return (
        <Fundo>
            <Link to={"/habitos"}>
            <h1>
                Hábitos
            </h1>
            </Link>
            <Link to={"/hoje"}>
            <div>
            <CircularProgressbar
                value={percentage}
                text="Hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#ffffff",
                    textSize: '18px',
                    pathColor: "#ffffff",
                    trailColor: "transparent"
                })}
            />
            </div>
            </Link>
            <Link to={"/historico"}>
            <h1>
                Histórico
            </h1>
            </Link>
        </Fundo>
    )
}

const Fundo = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #FFFFFF;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #52B6FF;
        font-size: 18px;
        padding: 35px;
        cursor: pointer;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        border: 1px solid #D5D5D5;
    }

    div {
        width: 90px;
        height: 90px;
        margin-bottom: 50px;
        cursor: pointer;
    }
`