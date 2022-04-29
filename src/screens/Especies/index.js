import React from "react";
import './especies.css';
import Navigator from "../../components/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EspeciesBox from "../../components/EspeciesBox";

const Especies = ()=>{
    return(
        <div className="page">
            <Navigator/>
            <div className="conteudo">
            <Container>
            <Row>
                <Col xs>
                    <div className="titulo">
                        <h5>Animais</h5>
                        <EspeciesBox title="Eucalipto"/>
                        <EspeciesBox title="Eucalipto"/>
                        <EspeciesBox title="Eucalipto"/>
                    </div>
                </Col>
                <Col xs>
                    <div className="titulo">
                        <h5>Plantas</h5>
                        <EspeciesBox title="Coffea arabica"/>
                        <EspeciesBox title="Coffea canephora"/>
                        <EspeciesBox title="Coffea"/>
                    </div>
                </Col>
                <Col xs>
                    <div className="titulo">
                        <h5>Microorganismos</h5>
                        <EspeciesBox title="Cândida viswanathi"/>
                        <EspeciesBox title="Cândida viswanathi"/>
                        <EspeciesBox title="Cândida viswanathi"/>
                    </div>
                </Col>
            </Row>
            </Container>
            </div>
        </div>
    )
}

export default Especies;
