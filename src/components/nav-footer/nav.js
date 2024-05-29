import React from 'react'
import {  Container, Form, Nav,  Navbar } from 'react-bootstrap'
import az from '../../images/az.png'
import './nav.css'

export default function Bar() {
  return (
    <Navbar  expand="lg" style={{backgroundColor:'#F2E1D9'}} >
        <Container className='p-0 ml-5 wv-100'>
        <Navbar.Brand href="#home">
          <div className='img-container'>
          <img
        src={az}
        width="50em"
        height="80em"
        className="d-inline-block align-top img"
        alt="AZ logo"
      />
          </div>
    </Navbar.Brand>
  <Navbar.Brand href="/"><h4 className='link'>Home</h4></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto  ">
        <Nav.Link  href="#home"><h4 className='link'>Products</h4></Nav.Link>
        <Nav.Link  href="#link"><h4 className='link'>About</h4></Nav.Link>
        <Nav.Link  href="#link"><h4 className='link'>Contact</h4></Nav.Link>
        <Nav.Link  href="/chat2"><h4 className='link'>Chat</h4></Nav.Link>

    </Nav>
    <Form >
    <Nav.Link href="#link"> <h4 className='link'>My Account</h4></Nav.Link>
    </Form>
  </Navbar.Collapse>
        </Container>
</Navbar>
  )
}
