import React, { Component } from 'react'
import axios from 'axios';
import { inject, observer } from 'mobx-react';

import FiveDaysForecast from '../fiveDaysForecast';
import apiKeys from '../../apiKeys.js'; // (.gitignore) src/apiKeys.js => module.exports = {AccuWeatherKey : 'your key'}

import './style.css';

@inject('CurrentCityTemperatureStore')
@inject('CurrentSelectedCityStore')
@inject('CityKeysStore')
@observer
class DisplayResult extends Component {

    getTemperature = async () => {
        let ans = null;
        const currentCityKey = this.props.CurrentSelectedCityStore.getCurrentSelctedCity.key;
        if(currentCityKey !== null && currentCityKey !== undefined){
            ans = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + currentCityKey + '?apikey=' + apiKeys.AccuWeatherKey);
            console.log('Current Conditions endpoint was activated !');
        }
        return ans;
    }

    render() {
        this.getTemperature().then(res => {
            if(res !== undefined){
                if(res.data.length > 0){
                    const temperatureMetricValue = res.data[0].Temperature.Metric.Value;
                    const temperatureMetricUnit = res.data[0].Temperature.Metric.Unit;
                    this.props.CurrentCityTemperatureStore.changeCurrentCityTemperature({
                        name:this.props.CurrentSelectedCityStore.getCurrentSelctedCity.name,
                        temperatureMetricValue:temperatureMetricValue,
                        temperatureMetricUnit:temperatureMetricUnit
                    });
                }
            }
            else{
                console.log('Error - can not find the temperature of this city !');
            }
        }, reason => {
            console.error(reason); // Error!
        });
        
        return (
            <div>
                <div>{this.props.CurrentSelectedCityStore.getCurrentSelctedCity.name}</div>
                <div>{this.props.CurrentCityTemperatureStore.getCurrentCityTemperature.temperatureMetricValue} {this.props.CurrentCityTemperatureStore.getCurrentCityTemperature.temperatureMetricUnit}</div>
                <FiveDaysForecast />
            </div>
        )
    }
}

export default DisplayResult;