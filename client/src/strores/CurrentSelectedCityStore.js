import { observable, action, computed } from 'mobx';

class CurrentSelectedCityStore {
    @observable currentSelectedCity = {
        name:'tel aviv',
        key:'215854',
        temperatureMetricValue:'',
        temperatureMetricUnit:'',
        WeatherText:'',
        WeatherIcon:''
    };

    @action changeCurrentSelctedCity = (cityObj) => {
        this.currentSelectedCity.name = cityObj.name;
        this.currentSelectedCity.key = cityObj.key;
        this.currentSelectedCity.temperatureMetricValue = cityObj.temperatureMetricValue;
        this.currentSelectedCity.temperatureMetricUnit = cityObj.temperatureMetricUnit;
        this.currentSelectedCity.WeatherText = cityObj.WeatherText;
        this.currentSelectedCity.WeatherIcon = cityObj.WeatherIcon;
    }

    @computed get getCurrentSelctedCity() {
        return {
            name:this.currentSelectedCity.name,
            key:this.currentSelectedCity.key,
            temperatureMetricValue:this.currentSelectedCity.temperatureMetricValue,
            temperatureMetricUnit:this.currentSelectedCity.temperatureMetricUnit,
            WeatherText:this.currentSelectedCity.WeatherText,
            WeatherIcon:this.currentSelectedCity.WeatherIcon
        }
    }
}

const store = new CurrentSelectedCityStore();
export default store;