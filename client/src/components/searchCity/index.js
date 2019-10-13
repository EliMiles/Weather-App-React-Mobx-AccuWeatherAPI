import React, { Component } from 'react'
import { FormControl , InputGroup} from 'react-bootstrap';
import { MdSearch } from "react-icons/md";

import apiKeys from '../../apiKeys.js';

import './style.css';

class SearchCity extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchInput:''
        }
    }

    changeHandler = (e) => {

        this.setState({[e.target.name]:e.target.value})
    }

    handleKeyPress = (event) => {
        
        if(event.key === 'Enter'){
            this.searchMyCity(this.state.searchInput);
        }
    }

    handleMouseClick(event){

        switch(event.which){
            case 1: {
                this.searchMyCity(this.state.searchInput);
                break;
            }
            default: {
                break;
            }
        }
    }

    searchMyCity = (cityName) => {
        console.log(cityName);
        console.log(apiKeys);
    }

    render() {
        return (
            <InputGroup className="search-form">
                <InputGroup.Prepend>
                    <InputGroup.Text onClick={(e) =>{this.handleMouseClick(e.nativeEvent)}} ><MdSearch /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    name="searchInput"
                    value={this.state.searchInput}
                    type="text"
                    placeholder="type your city..."
                    aria-describedby="inputGroupPrepend"
                    onKeyPress={this.handleKeyPress}
                    onChange={this.changeHandler}
                />
            </InputGroup>
        )
    }
}

export default SearchCity;