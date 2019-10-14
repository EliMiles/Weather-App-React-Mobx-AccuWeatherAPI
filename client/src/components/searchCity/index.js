import React, { Component } from 'react'
import { FormControl , InputGroup} from 'react-bootstrap';
import { MdSearch } from "react-icons/md";
import axios from 'axios';
import { inject, observer } from 'mobx-react';

import apiKeys from '../../apiKeys.js'; // (.gitignore) src/apiKeys.js => module.exports = {AccuWeatherKey : 'your key'}

import './style.css';

@inject('CityKeysStore')
@inject('CurrentSelectedCityStore')
@observer
class SearchCity extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchInput:'',
            lastSearchedCity:'',
            isCityAvailable:true
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

    searchMyCity = async (cityName) => {
        const cityName_lowerCase = cityName.toLowerCase();
        const cityName_no_spaces = cityName_lowerCase.replace(/\s+/g,' ').trim();

        console.log(cityName_no_spaces);

        let isExist = false;
        //let foundCity = null;

        this.props.CityKeysStore.getAllCityKeys.forEach(cityKey => {
            if(cityKey.name.toLowerCase() === cityName_no_spaces){
                isExist = true;
            }
        })

        // this.props.CityKeysStore.getAllCityKeys.forEach(cityKey => {
        //     if(cityKey.name.toLowerCase() === cityName_no_spaces){
        //         foundCity = {name:cityKey.name,key:cityKey.key};
        //         isExist = true;
        //     }
        // })

        if(isExist){
            if(this.props.CurrentSelectedCityStore.getCurrentSelctedCity !== cityName_no_spaces){
                this.props.CurrentSelectedCityStore.changeCurrentSelctedCity(cityName_no_spaces);
                console.log('if there is NO change something is wrong with this console !');
            }

            this.setState({
                searchInput:'',
                lastSearchedCity:cityName_no_spaces,
                isCityAvailable:true
            });
        }
        else{
            const res = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + apiKeys.AccuWeatherKey + '&q=' + cityName_no_spaces);
            console.log('Autocomplete search endpoint was activated !');
            if(res !== undefined && res.data.length > 0){
                this.props.CityKeysStore.addCityKey({name:cityName_no_spaces,key:res.data[0].Key});
                this.props.CurrentSelectedCityStore.changeCurrentSelctedCity(cityName_no_spaces);
                this.setState({
                    searchInput:'',
                    lastSearchedCity:cityName_no_spaces,
                    isCityAvailable:true
                });
            }
            else{
                console.log('Error - there is no such city !');
                this.setState({
                    searchInput:'',
                    lastSearchedCity:cityName_no_spaces,
                    isCityAvailable:false
                });
            }
        }

        // if(isExist){
        //     cityKey = foundCity.key;
        // }
        // else{
        //     const res = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + apiKeys.AccuWeatherKey + '&q=' + cityName_no_spaces);
        //     console.log('Autocomplete search endpoint was activated !');
        //     if(res !== undefined && res.data.length > 0){
        //         cityKey = res.data[0].Key;
        //         this.props.CityKeysStore.addCityKey({name:res.data[0].LocalizedName,key:res.data[0].Key});
        //     }
        //     else{
        //         console.log('Error - there is no such city !');
        //     }
        // }
        
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

        //console.log(this.props.CityKeysStore.getAllCityKeys);

        //this.setState({searchInput:''})
    }

    render() {
        return (
            <div>
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
                <span hidden={this.state.isCityAvailable} className="search-form-error-msg">{this.state.lastSearchedCity} is not recognized by AccuWeather API !</span>
            </div>
        )
    }
}

export default SearchCity;