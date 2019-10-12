import React, { Component } from 'react'
import { Form , InputGroup} from 'react-bootstrap';
import { MdSearch } from "react-icons/md";

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

    render() {
        console.log(this.state.searchInput);
        return (
            <Form className="search-form" noValidate>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text><MdSearch /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        name="searchInput"
                        value={this.state.searchInput}
                        type="text"
                        placeholder="type your city..."
                        aria-describedby="inputGroupPrepend"
                        onChange={this.changeHandler}
                    />
                </InputGroup>
            </Form>
        )
    }
}

export default SearchCity;