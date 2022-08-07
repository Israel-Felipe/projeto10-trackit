import styled from "styled-components"

export default function Topo ({image}) {

    return (
        <Fundo>
            <h1>TrackIt</h1>
            <img src={image}></img>
        </Fundo>
    )
}

const Fundo = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        font-size: 40px;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        border: 1px solid #D5D5D5;
    }
`