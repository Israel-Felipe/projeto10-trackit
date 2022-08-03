import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import { Corpo, Login, Cadastro } from "./Styled-Login-Cadastro"


export default function TelaLogin () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function fazerLogin (e) {
        e.preventDefault();

        const loginAPI = {
            email,
            password,
        }
    console.log(loginAPI)  
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginAPI);
            
            promise.then((res) => {
                navigate('/hoje');
            });
                
            promise.catch(()=> alert("Algo de errado não está certo"));
}

    return (
        <Corpo>
            <img src={logo} alt="TrackIt"></img>
           
            <Login onSubmit={fazerLogin}>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Entrar</button>
            </Login>
            <Link to={`/cadastro`}>
                <Cadastro>
                    Não tem uma conta? Cadastre-se!
                </Cadastro>
            </Link>
        </Corpo>
    )
}





