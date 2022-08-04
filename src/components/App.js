import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import TelaLogin from "./login-cadastro/TelaLogin";
import TelaCadastro from "./login-cadastro/TelaCadastro"
import TelaHabitos from "./habitos/TelaHabitos";
import TelaHoje from "./hoje/TelaHoje";
import TelaHistorico from "./historico/TelaHistorico";
import Topo from "./topoEmenu/Topo";


export default function App() {

    return (
        <>
        
        <BrowserRouter>
            <GlobalStyled />
                    <Routes>
                        <Route path="/"          element={<TelaLogin />} />
                        <Route path="/cadastro"  element={<TelaCadastro />} />
                    </Routes>

                    <Routes>
                        <Route path="/hoje"      element={<TelaHoje /> } />
                        <Route path="/habitos"   element={<TelaHabitos /> } />                      
                        <Route path="/historico" element={<TelaHistorico /> } />
                    </Routes>
                        
                    

        </BrowserRouter>
        
        </>
    )
}



const GlobalStyled = createGlobalStyle`
    ${reset}
    
    *, body {
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        cursor: default;
    a {
        text-decoration: none;
    }
    }
`;