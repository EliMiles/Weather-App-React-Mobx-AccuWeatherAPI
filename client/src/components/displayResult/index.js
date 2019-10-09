import React, { Component } from 'react'

import FiveDaysForecast from '../fiveDaysForecast';

class DisplayResult extends Component {
    render() {
        return (
            <div>
                DisplayResult
                <FiveDaysForecast />
            </div>
        )
    }
}

export default DisplayResult;