import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector} from 'react-redux';
import { CartIcon } from '../icons';

export default function NavBar() {
  const {amount} = useSelector(store=>store.cart) 
   return (
    <Navbar className='p-3' expand="lg">
    <Container>
    <Nav.Link href="#cart">
            <div className="nav-container">
           <CartIcon/>
            <div className="amount-container">
          <p className="total-amount">{amount}</p>
         </div>
         </div>
         </Nav.Link>
      <Navbar.Brand className='ms-3' href="#home">Redux Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

