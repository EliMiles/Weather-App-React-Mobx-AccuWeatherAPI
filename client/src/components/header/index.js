import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './style.css';

class Header extends Component {

    render() {
        return (
            <Navbar bg="info" expand="true">
                <span className="Navbar-title">Weather App</span>
                <span className="Navbar-buttons">
                    <Link to="/" className="Navbar-button"><Button  variant="outline-light" active={window.location.pathname === '/'}>Home</Button></Link>
                    <Link to="/favorites" className="Navbar-button"><Button  variant="outline-light" active={window.location.pathname === '/favorites'}>Favorites</Button></Link>
                </span>
            </Navbar>
        )
    }
}

export default Header;
