import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className='text-white fw-bolder'>
          <Link style={{textDecoration:'none', color:"blueviolet"}} to={'/'}><i class="fa-solid fa-play"></i> Media - Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header