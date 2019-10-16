import React, { Component } from 'react'
import axios from 'axios';
import { inject, observer } from 'mobx-react';
import { WiCelsius } from "react-icons/wi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Container, Row, Col, Button } from 'react-bootstrap';

import FiveDaysForecast from '../fiveDaysForecast';
import apiKeys from '../../apiKeys.js'; // (.gitignore) src/apiKeys.js => module.exports = {AccuWeatherKey : 'your key'}

import './style.css';

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
        // this.getTemperature().then(res => {
        //     if(res !== undefined){
        //         if(res.data.length > 0){
        //             const name = this.props.CurrentSelectedCityStore.getCurrentSelctedCity.name;
        //             const key = this.props.CurrentSelectedCityStore.getCurrentSelctedCity.key;
        //             const temperatureMetricValue = res.data[0].Temperature.Metric.Value;
        //             const temperatureMetricUnit = res.data[0].Temperature.Metric.Unit;
        //             this.props.CurrentSelectedCityStore.changeCurrentSelctedCity({
        //                 name:name,
        //                 key:key,
        //                 temperatureMetricValue:temperatureMetricValue,
        //                 temperatureMetricUnit:temperatureMetricUnit
        //             });
        //         }
        //     }
        //     else{
        //         console.log('Error - can not find the temperature of this city !');
        //     }
        // }, reason => {
        //     console.error(reason); // Error!
        // });

        this.props.CurrentSelectedCityStore.changeCurrentSelctedCity({
            name:'paris',
            key:'1234',
            temperatureMetricValue:'15',
            temperatureMetricUnit:'C'
        });
        
        // PrecipitationType

        return (
            <Container>
                <Row>
                    <Col xs="auto" sm="auto" md="auto" large="auto" xl="auto">
                        <Row>
                            <Col>
                                {this.props.CurrentSelectedCityStore.getCurrentSelctedCity.name}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {this.props.CurrentSelectedCityStore.getCurrentSelctedCity.temperatureMetricValue}<WiCelsius className="WiCelsius" />
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                    <Col xs="auto" sm="auto" md="auto" large="auto" xl="auto">
                        <FaRegHeart className="hearts" hidden={false} />
                        <FaHeart className="hearts" hidden={true} />
                        <span className="between-heart-and-buttons"></span>
                        <Button hidden={false} variant="outline-info">Add to Favorites</Button>
                        <Button hidden={true} variant="outline-info">Remove from Favorites</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="PrecipitationType">PrecipitationType</Col>
                </Row>
                <Row>
                    <Col className="FiveDaysForecast"><FiveDaysForecast /></Col>
                </Row>
            </Container>
        )
    }
}

export default DisplayResult;