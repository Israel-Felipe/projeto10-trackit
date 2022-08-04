import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner'

import logo from "../../images/logo.svg";
import { Corpo, Login, Cadastro } from "./Styled-Login-Cadastro"


export default function TelaLogin () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [botao, setBotao] = useState("Entrar");
    const [isDisabled, setIsDisabled] = useState(false);
    const [inputColor, setInputColor] = useState("#FFFFFF");
    const [buttonColor, setButtonColor] = useState("#52B6FF");

    function fazerLogin (e) {
        e.preventDefault();
        setBotao(<ThreeDots color="#FFFFFF"/>);
        setIsDisabled(true);
        setInputColor("#E5E5E5"); setButtonColor("#86CDFF");

        const loginAPI = {
            email,
            password,
        }
    
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginAPI);
            
            promise.then((res) => {  
                const usuario = res.data;
                const usuarioSerial = JSON.stringify(usuario);
                localStorage.setItem("user", usuarioSerial);
                navigate('/hoje');
            });
                
            promise.catch(() => {
                alert("Login ou senha incorretos");
                setBotao("Entrar");
                setIsDisabled(false);
                setInputColor("#FFFFFF"); setButtonColor("#52B6FF");
            });
}

    return (
        <Corpo>
            <img src={logo} alt="TrackIt"></img>
           
            <Login inputColor={inputColor} buttonColor={buttonColor} onSubmit={fazerLogin}>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={isDisabled} />
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required disabled={isDisabled} />
                
                <button type="submit" disabled={isDisabled}>
                    <div>{botao}</div>
                </button>
                
            </Login>
            <Link to={`/cadastro`}>
                <Cadastro disabled={isDisabled}>
                    Não tem uma conta? Cadastre-se!
                </Cadastro>
            </Link>
        </Corpo>
    )
}



