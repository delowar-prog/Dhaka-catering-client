import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const {user, loading,userLogout}=useContext(AuthContext)
  if(loading){
    return <p>Loading....</p>
  }
  const handleLogout = () => {
    userLogout().then().catch(error => console.log(error.message))
  }
  return (
    <div className=''>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#212B35" }} className='py-4'>
        <Container>
          <Navbar.Brand href="#home" className='text-warning fs-3'>Dhaka Catering</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><NavLink to="/" className={({ isActive }) => isActive ? "text-decoration-none text-info" : "text-decoration-none text-white"
          }>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/blog" className={({ isActive }) => isActive ? "text-decoration-none text-info" : "text-decoration-none text-white"
          }>Blog</NavLink></Nav.Link>
           {
            user&&<Nav.Link className='text-white' title={user.displayName}><img src={user.photoURL} style={{width:"40px",height:"40px",borderRadius:"50%"}}></img></Nav.Link>
           }
        
           {
            user?<Button variant="light" onClick={handleLogout}>Logout</Button>:<Link to="/login"><Button variant="light">Login</Button></Link>
           }
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header