
import styled from "styled-components"

export default function TelaHistorico() {

    return (
        <Container>
            <Titulo>
                <h1>Histórico</h1>
               <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>

            </Titulo>
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
    margin-top: 100px;
    width: 100%;
    height: 100px;
    padding: 18px;
    font-size: 23px;
    color: #126BA5;

    h2 {
        font-size: 18px;
        color: #666666;
        margin-top: 20px;
        line-height: 22px;
    }
`