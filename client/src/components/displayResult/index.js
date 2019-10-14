import React, { Component } from 'react'
import axios from 'axios';
import { inject, observer } from 'mobx-react';

import FiveDaysForecast from '../fiveDaysForecast';
import apiKeys from '../../apiKeys.js';

import './style.css';

@inject('CurrentSelectedCityStore')
@observer
class DisplayResult extends Component {
    render() {
        return (
            <div>
                DisplayResult - {this.props.CurrentSelectedCityStore.getCurrentSelctedCity}
                <FiveDaysForecast />
            </div>
        )
    }
}

export default DisplayResult;