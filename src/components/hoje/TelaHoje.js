import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
/* import updateLocale from "daysjs/plugin/updateLocale";
 */

import check from "../../images/check.svg"
import Topo from "../topoEmenu/Topo";
import Menu from "../topoEmenu/Menu";

export default function TelaHoje() {
    const user = JSON.parse(localStorage.getItem("user"));
    
    const dayjs = require('dayjs');
    const weekday = dayjs().locale("pt-br").format("dddd");
    const day = dayjs().locale("pt-br").format("DD/MM");

    function Habito() {
        return (
            <BlocoHabito>
                <div>
                    <h1>
                        Ler 1 capítulo de livro
                    </h1>
                    <h2>
                        Sequencia atual: 3 dias
                    </h2>
                    <h2>
                        Seu recorde: 5 dias
                    </h2>
                </div>
                <Check>
                    <img src={check}></img>
                </Check>
            </BlocoHabito>
        )
    }

    return (
        <Container>
        <Topo />
            <Titulo>
               <h1>{weekday}, {day}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Titulo>

            <ContHabito>
                <Habito />
                <Habito />
                <Habito />
            </ContHabito>
            
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
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 18px;
    
    font-size: 23px;
    color: #126BA5;

    h2 {
        color: #BABABA;
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

    h1 {font-size: 20px; margin-bottom: 10px};
    h2 {font-size: 13px; margin-bottom: 3px};
`

const Check = styled.div`
    width: 70px;
    height: 70px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`