import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap';

import './style.css';

class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            stopWindowSizing: false
        }
    }

    //TODO : give it another try later! - prevevet window sizing
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

    //TODO : give it another try later! - prevevet window sizing
    componentDidMount(){
        this.displayWindowDimensions();
        window.addEventListener("resize", this.displayWindowDimensions.bind(this));
    }

    render() {
        return (
            <Navbar bg="info" expand="true">
                <span hidden={this.state.stopWindowSizing} className="Navbar-title">Weather App</span>
                <span hidden={!this.state.stopWindowSizing} className="Navbar-title-small-window">Weather App</span>
                <span className="Navbar-buttons">
                    <Button className="Navbar-button" variant="outline-light" href="/">Home</Button>
                    <Button className="Navbar-button" variant="outline-light" href="/favorites">Favorites</Button>
                </span>
            </Navbar>
        )
    }
}

export default Header;
