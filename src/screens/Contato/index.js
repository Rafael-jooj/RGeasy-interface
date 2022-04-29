import React from "react";
import './contato.css'
import Navigator from "../../components/Navbar";

const Contato = ()=>{
    return(
        <div className="contatoBack">
            <Navigator/>
            <h2 className="title">Universidade Federal do Tacantins - UFT</h2>
            <div className="itens">
            <ul>
                <li>Quadra 109 Norte Avenida NS 15</li>
                <li>Bloco LAB02/Sala02 - Laboratório de Análises Moleculares/LAM - Saúde Humana</li>
                <li>Plano Diretor Norte</li>
                <li>77001090 - Palmas, TO - Brasil</li>
                <li>Telefone:</li>
                <li>Email: lamsh@uft.edu.br</li>
            </ul>
            </div>
        </div>
    )
}

export default Contato;