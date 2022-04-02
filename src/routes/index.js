import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/RGeasyHome";
import Contato from "../screens/Contato";
import Sobre from "../screens/Sobre";

const Rotas= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas