import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap';

import './style.css';

class Header extends Component {
    render() {
        return (
            <Navbar bg="info" expand="true">
                <span className="Navbar-title">Weather App</span>
                <span className="Navbar-buttons">
                    <Button className="Navbar-button" variant="outline-light" href="/">Home</Button>
                    <Button className="Navbar-button" variant="outline-light" href="/favorites">Favorites</Button>
                </span>
            </Navbar>
        )
    }
}

export default Header;
