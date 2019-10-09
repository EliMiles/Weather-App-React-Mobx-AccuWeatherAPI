import React, { Component } from 'react'

import SearchCity from '../../components/searchCity';
import DisplayResult from '../../components/displayResult';

class HomePage extends Component {
    render() {
        return (
            <div>
                <SearchCity />
                <DisplayResult />
            </div>
        )
    }
}

export default HomePage;