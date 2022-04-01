import React from "react";
import './manual.css';
import { AiOutlineFilePdf } from 'react-icons/ai'

const Manual = ()=>{
    return(
        <div className="box">
            <h4>Manual do Usuário</h4>
            <ul className="manual">
                <li><a href="#"><AiOutlineFilePdf/></a></li>
                <li><a href="#">Manual</a></li>
            </ul>
        </div>
    )
}

export default Manual;