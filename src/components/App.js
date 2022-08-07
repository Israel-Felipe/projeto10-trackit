import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PrivatePage from "./PrivatePage/PrivatePage";
import UserContext from "../context/UserContext";

import TelaLogin from "./login-cadastro/TelaLogin";
import TelaCadastro from "./login-cadastro/TelaCadastro"
import TelaHabitos from "./habitos/TelaHabitos";
import TelaHoje from "./hoje/TelaHoje";
import TelaHistorico from "./historico/TelaHistorico";



export default function App() {
    const [percentage, setPercentage] = useState(0);
    const [atualizaMenu, setAtualizaMenu] = useState(false)

    return (
        <>
        
        <BrowserRouter>
            <GlobalStyled />
                <UserContext.Provider value={{ percentage, setPercentage, atualizaMenu, setAtualizaMenu}}>
                    <Routes>
                        <Route path="/"          element={<TelaLogin />} />
                        <Route path="/cadastro"  element={<TelaCadastro />} />

                        <Route path="/hoje"     element={
                                                    <PrivatePage>
                                                        <TelaHoje />
                                                    </PrivatePage>
                                                } />
                        <Route path="/habitos"   element={
                                                    <PrivatePage>
                                                        <TelaHabitos />
                                                    </PrivatePage>
                                                } />                      
                        <Route path="/historico" element={
                                                    <PrivatePage>
                                                        <TelaHistorico />
                                                    </PrivatePage>
                                                } />
                    </Routes>
                </UserContext.Provider>
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