import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'




const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="sm" collapseOnSelect>
      <Container  >
         <LinkContainer to='/'>
              <Navbar.Brand >Proshop</Navbar.Brand>
         </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

           <Nav className='ml-auto'>
            
                 <LinkContainer to='/cart' >
                  <Nav.Link >
                    <i className='fas fa-shopping-cart'></i>Cart
                   </Nav.Link>
                   </LinkContainer>
             
                  <LinkContainer to='/login'>
                  <Nav.Link >
                   <i className='fas fa-user'></i> sign in
                  </Nav.Link>  
                  </LinkContainer>
            
        
               </Nav>
          

   

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
