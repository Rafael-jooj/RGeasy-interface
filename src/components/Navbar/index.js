import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavbarText,
  DropdownItem } from 'reactstrap';

const Navigator = () => {

  const [click, setClick] = useState(false)

  function noRefCheck(){
    setClick((click) => !click)
  }

    return(
      <div>
      <Navbar
        color="success"
        dark
        expand="lg"
        fixed=""
        full
        light
      >
        <NavbarBrand href="/">
          RGeasy
        </NavbarBrand>
        <NavbarToggler onClick={noRefCheck} />
        <Collapse navbar isOpen={click}>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem className='item'>
              <NavLink href="/" active={true}>
                RGeasy Home
              </NavLink>
            </NavItem>
            <NavItem className='item'>
              <NavLink href="#">
                Espécies
              </NavLink>
            </NavItem>
            <NavItem className='item'>
              <NavLink href="#">
                Registrar Espécies
              </NavLink>
            </NavItem>
            <NavItem className='item'>
              <NavLink href="/sobre">
                Sobre Nós
              </NavLink>
            </NavItem>
            <NavItem className='item'>
              <NavLink href="/contato">
                Contato
              </NavLink>
            </NavItem>
            <NavItem className='item'>
              <NavLink href="#">
                Entrar
              </NavLink>
            </NavItem>
          </Nav>
            <UncontrolledDropdown
              inNavbar
            >
              <DropdownToggle
                caret
                nav
              >
                Português
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  English
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          <NavbarText className='item'>
            UFT
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default Navigator;