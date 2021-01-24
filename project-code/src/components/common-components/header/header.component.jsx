import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {Navbar, Nav, Button} from 'react-bootstrap'

import logo from '../../../assets/logo.jpg'
// import CustomButton from '../custom-button/custom-button.component';
import './header.styles.css';


const Header = () => {
    let dispatch = useDispatch()
    let history = useHistory()
    const logout = () => {
      firebase.auth().signOut()
      dispatch({
        type:"LOGOUT",
        payload:null,
      });
      history.push('/login');
    }

    // <div className = 'header'>
    //     <Link className = 'logo-container' to='/'>
    //         <Logo className='logo' />
    //     </Link>
    //     <div className='options'>
    //         <Link className='option' to='/'>
    //             Main Page
    //         </Link>

    //         <Link className='option' to='/rentalcollection'>
    //             Collection
    //         </Link>

    //     </div>
    // </div>
    return(
    <div className='header-container'>
<Navbar>
    <Navbar.Brand>
    
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      TWM
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  as = {Link} to="/">Main Page</Nav.Link>
      <Nav.Link  as = {Link} to="/rentalcollection">Collection</Nav.Link>
    </Nav>
    <Nav className='menu-display-hide'>
      <Nav.Link as = {Link} className="mr-auto" to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link as = {Link} to="/packages">Packages</Nav.Link>
      <Nav.Link as = {Link} to="/services">Services</Nav.Link>
      <Nav.Link as = {Link} to="/account">Account</Nav.Link>
      <Nav.Link as = {Link} to="/about">About</Nav.Link>
    </Nav>
    
    <Button as = {Link} to="/login">Log In</Button>
    
    <span>Welcome</span>
    <Button onClick={logout}>Log Out</Button>
    {/* <CustomButton >Log In</CustomButton> */}
  </Navbar.Collapse>
  </Navbar>
  <hr />
    </div>
    )
    
  }

export default Header;