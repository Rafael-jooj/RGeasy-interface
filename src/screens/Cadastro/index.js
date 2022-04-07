import React from "react";
import './cadastro.css';
import Navigator from "../../components/Navbar";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Cadastro = () =>{
    return(
        <div className="back-cad">
            <Navigator/>
        <div className="container">
            <div style={{textAlign: "center", marginTop: 50}}>
                <h3>Cadastrar</h3>
            </div>
            <div className="margem">
            <Form inline>
            <FormGroup>
                <Label>Nome</Label>
                <Input
                id="exampleEmail"
                name="name"
                placeholder="Nome"
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                />
            </FormGroup>
            <FormGroup>
                <Label>Senha</Label>
                <Input
                id="examplePassword"
                name="Senha"
                placeholder="Senha"
                type="password"
                />
            </FormGroup>
            <FormGroup>
                <Label>Confirmar senha</Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="Confirmar senha"
                type="password"
                />
            </FormGroup>
            <Button className="large">Cadastre-se</Button>
            <div style={{textAlign: "center", marginTop: 10}}>
                <a href="/entrar">Login</a>
            </div>
            </Form>
            </div>
            </div>
        </div>
    )
}

export default Cadastro;