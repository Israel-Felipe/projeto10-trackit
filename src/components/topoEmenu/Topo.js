import styled from "styled-components"
import logoff from "../../images/logoff.svg"
export default function Topo ({image}) {

    return (
        <Fundo>
            <h1>TrackIt</h1>
            <div>
            
                <div onClick={() => {localStorage.clear(); window.location.reload()}}>
                    <img src={logoff} alt="logoff" width={60} height={60}></img>
                </div>
                <img src={image} width={50} height={50}></img>
            </div>
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
        border-radius: 100px;
    }
    div {
        display: flex;
        align-items: center;
    }
`