import { observable, action, computed } from 'mobx';

class CurrentSelectedCityStore {
    @observable currentSelectedCity = {
        name:'tel aviv',
        key:'215854',
        temperatureMetricValue:'',
        temperatureMetricUnit:''
    };

    @action changeCurrentSelctedCity = (cityObj) => {
        this.currentSelectedCity.name = cityObj.name;
        this.currentSelectedCity.key = cityObj.key;
        this.currentSelectedCity.temperatureMetricValue = cityObj.temperatureMetricValue;
        this.currentSelectedCity.temperatureMetricUnit = cityObj.temperatureMetricUnit;
    }

    @computed get getCurrentSelctedCity() {
        return {
            name:this.currentSelectedCity.name,
            key:this.currentSelectedCity.key,
            temperatureMetricValue:this.currentSelectedCity.temperatureMetricValue,
            temperatureMetricUnit:this.currentSelectedCity.temperatureMetricUnit
        }
    }
}

const store = new CurrentSelectedCityStore();
export default store;