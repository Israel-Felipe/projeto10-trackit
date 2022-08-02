import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./login/TelaLogin";
import TelaCadastro from "./cadastro/TelaCadastro"
import TelaHabitos from "./habitos/TelaHabitos";
import TelaHoje from "./hoje/TelaHoje";
import TelaHistorico from "./historico/TelaHistorico";
import Topo from "./topo/Topo";


export default function App() {
    
    return (
        <>
        <BrowserRouter>
            <Topo />
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/historico" element={<TelaHistorico />} />
                </Routes>
        </BrowserRouter>
        </>
    )
}   