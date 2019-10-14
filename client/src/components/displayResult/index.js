import React, { Component } from 'react'
import axios from 'axios';
import { inject, observer } from 'mobx-react';

import FiveDaysForecast from '../fiveDaysForecast';
import apiKeys from '../../apiKeys.js'; // (.gitignore) src/apiKeys.js => module.exports = {AccuWeatherKey : 'your key'}

import './style.css';

@inject('CurrentSelectedCityStore')
@inject('CityKeysStore')
@observer
class DisplayResult extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentSelctedCityTemperature:''
        }
    }

    // if(cityKey !== null){
    //     const res = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + cityKey + '?apikey=' + apiKeys.AccuWeatherKey);
    //     console.log('Current Conditions endpoint was activated !');
    //     if(res !== undefined && res.data.length > 0){
    //         console.log(res.data[0].Temperature.Metric);
    //     }
    //     else{
    //         console.log('Error - can not find the temperature of this city !');
    //     }
    // }

    render() {
        console.log(this.props.CurrentSelectedCityStore.getCurrentSelctedCity.name + '  '
        + this.props.CurrentSelectedCityStore.getCurrentSelctedCity.key);
        return (
            <div>
                <div>{this.props.CurrentSelectedCityStore.getCurrentSelctedCity.name}</div>
                <div>{this.state.currentSelctedCityTemperature}</div>
                <FiveDaysForecast />
            </div>
        )
    }
}

export default DisplayResult;