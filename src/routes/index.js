import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/RGeasyHome";
import Contato from "../screens/Contato";

const Rotas= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas