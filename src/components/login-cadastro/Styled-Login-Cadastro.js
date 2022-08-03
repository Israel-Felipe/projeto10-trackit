import styled from "styled-components";

export const Corpo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin: 70px 0 35px 0;
    }
`

export const Login = styled.form`
    display: flex;
    flex-direction: column;
    width: 85%;
    gap: 6px;

    input, button {
        width: 100%;
        height: 45px;
        padding: 15px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    input::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    }
    textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        }

    button {
        width: 100%;
        height: 45px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 20px;
        text-align: center;
        justify-content: center;
        border: none;
        font-weight: bold;
}
`

export const Cadastro = styled.h1`
    color: #52B6FF;
    font-size: 14px;
    text-decoration-line: underline;
    margin: 25px;
`