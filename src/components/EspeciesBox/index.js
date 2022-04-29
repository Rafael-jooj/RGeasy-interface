import React from "react";
import './especiesBox.css'
import {Container, Row, Col} from 'react-bootstrap'

const EspeciesBox = (props)=>{
    return(
        <div className="boxContent">
            <Row>
                <Col sm={2}>
                    <img src="../../../images/coffea.jpg" width={75}/>
                </Col>
                <Col sm={10}>
                    <p className="cardText">{props.title}</p>
                </Col>
            </Row>
        </div>
    )
}

export default EspeciesBox;