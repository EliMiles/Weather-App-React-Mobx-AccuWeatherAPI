import React, { Component } from 'react'

class FavoriteCity extends Component {
    render() {
        return (
            <div>
                {this.props.cityName} {this.props.cityKey}
            </div>
        )
    }
}

export default FavoriteCity;