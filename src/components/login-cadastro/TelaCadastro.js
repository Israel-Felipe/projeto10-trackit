import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import { Corpo, Login, Cadastro } from "./Styled-Login-Cadastro"

export default function TelaCadastro () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    function fazerCadastro (e) {
            e.preventDefault();

            const cadastroAPI = {
                email: email,
                name: nome,
                image: foto,
                password: senha
            }
            const usuario = {
                email,
                senha,
                nome,
                foto
            }
            
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastroAPI);
            
            promise.then((res) => {
                console.log(cadastroAPI)
                navigate('/');
            });
                
            promise.catch(()=> alert("Algo de errado não está certo"));
}

    return (
        <Corpo>
            <img src={logo} alt="TrackIt"></img>
           
            <Login onSubmit={fazerCadastro}>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
                <input placeholder="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                <input placeholder="foto" type="text" value={foto} onChange={e => setFoto(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </Login>

            <Link to={`/`}>
                <Cadastro>
                    Já tem uma conta? Faça login!
                </Cadastro>
            </Link>
        </Corpo>
    )
}
