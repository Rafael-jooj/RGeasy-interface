import React from "react";
import './sobre.css';
import Navigator from "../../components/Navbar";
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Sobre = ()=>{
    return(
        <div className="center">
            <Navigator/>
            <div className="box">
            <div className="imagem">
                <div ><img src="https://img.freepik.com/fotos-gratis/executivos-de-startups-discutindo-em-um-cafe_53876-101879.jpg?w=996&t=st=1651210521~exp=1651211121~hmac=964f12d0b86d833b4e1516b134f6112716a2f03865826d256c064d7791dc5991" alt="sobre"/></div> 
            </div>
            <div className="cards">
            <Row>
            <Col sm="6">
                <Card body>
                <CardTitle id="title"><strong>Universidade Federal do Tocantins - LAM Saúde Humana</strong></CardTitle>
                <CardText>O Laboratório de Análises Moleculares (LAM/Saúde Humana) faz parte do Complexo Laboratorial da Saúdo do Câmpus Universitário de Palmas/UFT e tem como objetivo desenvolver pesquisas biotecnologicas voltadas à criação de produtos, processos e serviços no setor agropecuário e na área da saúde, bem como tranferir para a sociedade toda a tecnologia gerada.</CardText>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle id="title"><strong>Universidade Federal de Lavras - LFMP</strong></CardTitle>
                <CardText>O Laboratório de Fisiologia Molecular de Plantas da Universidade Federal de Lavras (UFLA-MG) desenvolve pesquisas nas áreas de fisiologia vegetal e biotecnologia com o objetivo de compreender melhor os mecanismos moleculares que controlam diferentes aspectos do crescimento e desenvolvimento das plantas, principalmente o controle da floração de diferentes culturas.</CardText>
                </Card>
            </Col>
            </Row>
            </div>
            </div>
        </div>
    )
}

export default Sobre;