import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Menu () {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Fundo>
            <Link to={"/habitos"}>
            <h1>
                Hábitos
            </h1>
            </Link>
            <Link to={"/hoje"}>
            <h1>
                Hoje
            </h1>
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
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        border: 1px solid #D5D5D5;
    }
`