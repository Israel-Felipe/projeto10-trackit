import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";

import { checkHabito } from "../../services/services";
import { uncheckHabito } from "../../services/services";
import checkImg from "../../images/check.svg"


export default function HabitoHoje({habito, setReload, reload}) {
    const { setAtualizaMenu, atualizaMenu } = useContext(UserContext);
    const [checkColor, setCheckColor] = useState("#EBEBEB");
    const [checkColorLetras, setCheckColorLetras] = useState("#666666");
    const [checkColorLetrasRec, setCheckColorLetrasRec] = useState("#666666");
    
    
    useEffect (() => {
        if (habito.done === true) {
            setCheckColor("#8FC549"); setCheckColorLetras("#8FC549"); setCheckColorLetrasRec("#8FC549") 
        } 
    },[])
 
    function checkHab(setCheckColor, setCheckColorLetras, setCheckColorLetrasRec, habito) {
        setCheckColor("#8FC549");
        setCheckColorLetras("#8FC549");
        {(habito.currentSequence === habito.highestSequence)
            ? setCheckColorLetrasRec("#8FC549")
            : setCheckColorLetrasRec("#666666")
        }
        checkHabito(habito.id)
        .then(() => {setReload(!reload); setAtualizaMenu(!atualizaMenu)})
    }
    
    function unCheckHab(setCheckColor, setCheckColorLetras, setCheckColorLetrasRec, habito) {
        setCheckColor("#EBEBEB");
        setCheckColorLetras("#666666");
        setCheckColorLetrasRec("#666666")
        uncheckHabito(habito.id)
        .then(() => {setReload(!reload); setAtualizaMenu(!atualizaMenu)})
    }
    
    return (
        <BlocoHabito>
            <div>
                <h1>
                    {habito.name}
                </h1>
                <Sequencia checkColorLetras={checkColorLetras}>
                    Sequência atual: <h2>{habito.currentSequence} dias </h2>
                </Sequencia>
                <Sequencia checkColorLetrasRec={checkColorLetrasRec}>
                    Seu recorde: <h3>{habito.highestSequence} dias</h3>
                </Sequencia>
            </div>
            <Check checkColor={checkColor} onClick={() => 
                {habito.done === false
                ? checkHab(setCheckColor, setCheckColorLetras, setCheckColorLetrasRec, habito)
                : unCheckHab(setCheckColor, setCheckColorLetras, setCheckColorLetrasRec, habito)}
                }>
                <img src={checkImg}></img>
            </Check>
        </BlocoHabito>
    )
}





const BlocoHabito = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 95px;
    border-radius: 5px;
    color: #666666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    h1 {
        font-size: 20px; 
        margin-bottom: 10px
    }

`

const Check = styled.div`
    width: 70px;
    height: 70px;
    background: ${props => props.checkColor};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Sequencia = styled.div`
    font-size: 13px; 
    gap: 3px;
    display: flex;
    margin-bottom: 3px;
    
    h2 {
        color: ${props => props.checkColorLetras};
    }
    h3 {
        color: ${props => props.checkColorLetrasRec};
    }
`