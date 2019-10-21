import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { WiCelsius } from "react-icons/wi";

import apiKeys from '../../apiKeys.js'; // (.gitignore) src/apiKeys.js => module.exports = {AccuWeatherKey : 'your key'}

import './style.css';

@inject('CurrentSelectedCityStore')
@observer
class FavoriteCity extends Component {

    constructor(props){
        super(props)

        this.state = {
            temperatureMetricValue:'',
            WeatherText:''
        }
    }

    componentDidMount(){
        this.getTemperature().then(res => {
            if(res !== undefined){
                if(res.data.length > 0){
                    const obj = {
                        temperatureMetricValue:res.data[0].Temperature.Metric.Value,
                        WeatherText:res.data[0].WeatherText
                    }
                    this.setState(obj);
                }
            }
            else{
                console.log({
                    myMsg:'Error : FavoriteCity=>componentDidMount=>getTemperature().then : can not find the temperature of this city !'
                });
            }
        }, error => {
            console.error({
                myMsg:'FavoriteCity=>componentDidMount=>getTemperature().then.error',
                errorMsg:error
            });
        });
    }

    openCityInHomepage = () => {
        this.props.CurrentSelectedCityStore.changeCurrentSelctedCity({
            name:this.props.cityName,
            key:this.props.cityKey,
            temperatureMetricValue:'',
            temperatureMetricUnit:'',
            WeatherText:'',
            WeatherIcon:''
        });
    }

    getTemperature = async () => {
        let ans = null;
        const currentCityKey = this.props.cityKey;

        if(currentCityKey !== null && currentCityKey !== undefined){
            try{
                ans = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + currentCityKey + '?apikey=' + apiKeys.AccuWeatherKey);
                //console.log('Current Conditions endpoint was activated !');//!!!!!!!!!!!!
            }
            catch(error){
                console.log({
                    myMsg:'ERROR : FavoriteCity=>getTemperature : Current Conditions endpoint not succeeded!',
                    errorMsg:error,
                    ans:ans
                });
            }
        }

        return ans;
    }

    render() {

        return (
            <Link to="/">
                <Button className="singleFavoriteCity" onClick={(e) => this.openCityInHomepage()} variant="outline-info" active={this.props.CurrentSelectedCityStore.getCurrentSelctedCity.name === this.props.cityName}>
                    <div>
                        {this.props.cityName}
                    </div>
                    <div>
                        {this.state.temperatureMetricValue}<WiCelsius className="WiCelsius" />
                    </div>
                    <div>
                        {this.state.WeatherText}
                    </div>
                </Button>
            </Link>
        )
    }
}

export default FavoriteCity;