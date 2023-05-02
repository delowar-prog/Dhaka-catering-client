import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  // const {user, loading,userLogout}=useContext(AuthContext)
  // if(loading){
  //   return <p>Loading....</p>
  // }
  const handleLogout = () => {
    userLogout().then().catch(error => console.log(error.message))
  }
  return (
    <div className=''>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#212B35" }} className='py-4'>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Dhaka Catering</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to="/" className='text-decoration-none text-white'>Home</Link></Nav.Link>
            <Nav.Link><Link to="" className='text-decoration-none text-white'>Blog</Link></Nav.Link>
            <Nav.Link href="#pricing" className='text-white'></Nav.Link>
            <Link to="/login"><Button variant="light">Login</Button></Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header