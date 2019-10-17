import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import axios from 'axios';
import { WiCelsius } from "react-icons/wi";

import apiKeys from '../../apiKeys.js'; // (.gitignore) src/apiKeys.js => module.exports = {AccuWeatherKey : 'your key'}
import FavoriteCity from '../favoriteCity';

@inject('FavoritesStore')
@inject('CityKeysStore')
@observer
class Favorites extends Component {
    render() {
        //console.log(this.props.FavoritesStore.getFavoriteCities.length);
        return (
            <div>
                {this.props.FavoritesStore.getFavoriteCities.map(cityName => {
                    return <FavoriteCity key={cityName} name={cityName} />
                })}
            </div>
        )
    }
}

export default Favorites;