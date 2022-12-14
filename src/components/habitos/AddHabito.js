import styled from "styled-components";
import { useState } from "react";
import Day from "./Day";
import { ThreeDots } from  'react-loader-spinner'
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { postHabito } from "../../services/services";

export default function AddHabito ({daysSelected, setDaysSelected, habito, setHabito, displayAddHab, setDisplayAddHab, setReload, reload}) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [isDisabled, setIsDisabled] = useState(false);
    const [inputColor, setInputColor] = useState("#FFFFFF");
    const [buttonColor, setButtonColor] = useState("#52B6FF");
    const [botao, setBotao] = useState("Salvar");
    const [cancelar, setCancelar] = useState("Cancelar");
    const { setAtualizaMenu, atualizaMenu } = useContext(UserContext);
    const[atualizaBGDay, setAtualizaBGday] = useState(false);

    function sendHabito() {
        
        setIsDisabled(true);
        setBotao(<ThreeDots color="#FFFFFF" width={50} height={50}/>);
        setInputColor("#F2F2F2"); setButtonColor("#86CDFF"); setCancelar("");
        

        const postHabitoBody = {
            name: habito,
            days: daysSelected
        }

        postHabito(postHabitoBody)
        .then(() => {  
            setReload(!reload); setAtualizaMenu(!atualizaMenu); setAtualizaBGday(!atualizaBGDay)
            setIsDisabled(false); setInputColor("#FFFFFF"); setButtonColor("#52B6FF"); setCancelar("Cancelar"); setBotao("Salvar");
            setHabito(""); setDaysSelected([]); setDisplayAddHab("none")
        })             
        .catch(() => {
            alert("Algo deu errado...")
            setIsDisabled(false); setInputColor("#FFFFFF"); setButtonColor("#52B6FF"); setCancelar("Cancelar"); setBotao("Salvar");
        });
    }

    return (
            <AddHabitoBody displayAddHab={displayAddHab} inputColor={inputColor}>
                <input placeholder="nome do hábito" type="text" value={habito} onChange={e => setHabito(e.target.value)} required disabled={isDisabled} />
                <Week>
                    {week.map((day, index) => <Day key={index} idDay={index} day={day} daysSelected={daysSelected} setDaysSelected={setDaysSelected} isDisabled={isDisabled} atualizaBGDay={atualizaBGDay}/>)}
                </Week>

                <Buttons buttonColor={buttonColor}>
                    <h1 disabled={isDisabled} onClick={() => setDisplayAddHab("none")}>{cancelar}</h1>
                    <button disabled={isDisabled} onClick={() => sendHabito()}>{botao}</button>
                </Buttons>
            </AddHabitoBody>
    )
}

const AddHabitoBody = styled.div`
    width: 90%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    display: ${props => props.displayAddHab};

    input {
        width: 100%;
        height: 45px;
        padding: 15px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        background: ${props => props.inputColor};
        color: #666666;
        font-size: 20px;
    }

    input::placeholder {
        color: #DBDBDB;
    }
    textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

`
const Week = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;
`



const Buttons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    justify-content: right;
    align-items: center;
    color: #52B6FF;
    
    h1 {
        cursor: pointer;
    }
    button {
        width: 85px;
        height: 35px;
        color: #FFFFFF;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: ${props => props.buttonColor};
        border-radius: 3px;
        cursor: pointer;
    }
`   