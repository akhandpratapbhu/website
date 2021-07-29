
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import phone from '../image/phon.png'
//import styled from 'styled-components';
import { ButtonContainer } from "./Button";
import { Navbar,Container } from 'react-bootstrap'
export default class nav extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
              <Link to='/'>
              <img src={phone} alt="store" className="  navbar-brand"/>
          </Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <li>  <Link to='/cart' className="ml-auto">
              <ButtonContainer >
                  <span className=" mr-2">
                  <i className="fas fa-cart-plus" />
                  </span>
                  my cart
              </ButtonContainer>
          </Link>
        </li>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    
    )
  }
}
