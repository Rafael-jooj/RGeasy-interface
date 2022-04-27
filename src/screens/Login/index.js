import React from "react";
import './login.css'
import Navigator from "../../components/Navbar";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () =>{
    return(
        <div className="back-login">
            <Navigator/>
            <div className="fundo">
            <div className="container">
                <div className="caixa2 margem">
                <div style={{textAlign: "center"}}>
                    <h3>Login</h3>
                </div>
                <Form inline>
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
                    <Label>Password</Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    />
                </FormGroup>
                <p>Esqueceu sua Senha? <a href="#">Recuperar Senha</a></p>
                <Button className="large">Entrar</Button>
                <div style={{textAlign: "center", marginTop: 10}}>
                    <a href="/cadastro">Cadastre-se</a>
                </div>
                </Form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;