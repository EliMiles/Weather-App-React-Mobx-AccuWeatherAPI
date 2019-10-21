import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

import FavoriteCity from '../favoriteCity';

@inject('FavoritesStore')
@observer
class Favorites extends Component {
    render() {
        return (
            <div>
                {this.props.FavoritesStore.getFavoriteCities.map(cityObj => {
                    return <FavoriteCity key={cityObj.key} cityName={cityObj.name} cityKey={cityObj.key} />
                })}
            </div>
        )
    }
}

export default Favorites;