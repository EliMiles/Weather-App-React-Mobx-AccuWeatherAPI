import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './style.css';

class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            stopWindowSizing: false
        }
    }

    //TODO : give it another try later! - prevevet window sizing
    componentDidMount(){
        this.displayWindowDimensions();
        window.addEventListener("resize", this.displayWindowDimensions.bind(this));
    }
    displayWindowDimensions() {
        if(window.innerWidth < 188 && this.state.stopWindowSizing === false){
            this.setState({stopWindowSizing:true});
        }
        else{
            if(window.innerWidth >= 188 && this.state.stopWindowSizing === true){
                this.setState({stopWindowSizing:false});
            }
        }
        
        //console.log(window.innerWidth + ' ' + this.state.stopWindowSizing);
    }
    ///////////////////////////////////////////////////////////////////

    render() {
        return (
            <Navbar bg="info" expand="true">
                <span hidden={this.state.stopWindowSizing} className="Navbar-title">Weather App</span>
                <span hidden={!this.state.stopWindowSizing} className="Navbar-title-small-window">Weather App</span>
                <span className="Navbar-buttons">
                    <Link to="/" className="Navbar-button"><Button  variant="outline-light" active={window.location.pathname === '/'}>Home</Button></Link>
                    <Link to="/favorites" className="Navbar-button"><Button  variant="outline-light" active={window.location.pathname === '/favorites'}>Favorites</Button></Link>
                </span>
            </Navbar>
        )
    }
}

export default Header;
