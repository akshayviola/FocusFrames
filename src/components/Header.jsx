import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import HeaderCanvas from './HeaderCanvas';
const Header = () => {
  return (
    <>
    
    <Navbar className="navbar ">
        <Container>
          <Navbar.Brand href="#home">
          <h4 className='BlogName'>.FocusFrames</h4>
          </Navbar.Brand>
          
          <HeaderCanvas/>
        </Container>

      </Navbar>
   

    </>
  )
}

export default Header