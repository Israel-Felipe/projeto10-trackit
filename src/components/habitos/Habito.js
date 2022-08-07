import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { deleteHabito } from "../../services/services";
import lixo from "../../images/lixo.svg";

export default function Habito ({infosHabito}) {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    const selecionados = infosHabito.days;
    const { setAtualizaMenu, atualizaMenu } = useContext(UserContext);

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
            <img src={lixo} onClick={() => {
                if (window.confirm(`Deseja realmente apagar o hábito: ${infosHabito.name}?`)) {
                    deleteHabito(infosHabito.id); setAtualizaMenu(!atualizaMenu)
                  }
            }}></img>
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