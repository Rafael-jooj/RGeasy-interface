import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/RGeasyHome";
import Contato from "../screens/Contato";
import Sobre from "../screens/Sobre";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Especies from "../screens/Especies";

const Rotas= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/entrar" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/especies" element={<Especies/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas