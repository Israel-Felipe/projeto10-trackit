import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner'

import logo from "../../images/logo.svg";
import { Corpo, Login, Cadastro } from "./Styled-Login-Cadastro"

export default function TelaCadastro () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [botao, setBotao] = useState("Cadastrar");
    const [isDisabled, setIsDisabled] = useState(false);
    const [inputColor, setInputColor] = useState("#FFFFFF");
    const [buttonColor, setButtonColor] = useState("#52B6FF");

    function fazerCadastro (e) {
            e.preventDefault();
            setBotao(<ThreeDots color="#FFFFFF" height={80} width={80}/>);
            setIsDisabled(true);
            setInputColor("#E5E5E5"); setButtonColor("#86CDFF");

            const cadastroAPI = {
                email: email,
                name: nome,
                image: foto,
                password: senha
            }
            
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastroAPI);
            
            promise.then((res) => {
                console.log(cadastroAPI)
                navigate('/');
            });
                
            promise.catch(() => {
                alert("Insira corretamente o endereço da imagem");
                setBotao("Cadastrar");
                setIsDisabled(false);
                setInputColor("#FFFFFF"); setButtonColor("#52B6FF");
            });
}

    return (
        <Corpo>
            <img src={logo} alt="TrackIt"></img>
           
            <Login inputColor={inputColor} buttonColor={buttonColor} onSubmit={fazerCadastro}>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={isDisabled} />
                <input placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required disabled={isDisabled} />
                <input placeholder="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} required disabled={isDisabled} />
                <input placeholder="foto" type="text" value={foto} onChange={e => setFoto(e.target.value)} required disabled={isDisabled} />
                <button type="submit" disabled={isDisabled}>
                    <div>{botao}</div>
                </button>
            </Login>

            <Link to={`/`}>
                <Cadastro disabled={isDisabled}>
                    Já tem uma conta? Faça login!
                </Cadastro>
            </Link>
        </Corpo>
    )
}
