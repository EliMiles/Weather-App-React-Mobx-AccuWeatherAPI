import { observable, action, computed } from 'mobx';

class CurrentCityTemperatureStore {
    @observable currentCityTemperature = {
        name:'tel aviv',
        temperatureMetricValue:'',
        temperatureMetricUnit:''
    };

    @action changeCurrentCityTemperature = (cityObj) => {
        this.currentCityTemperature.name = cityObj.name;
        this.currentCityTemperature.temperatureMetricValue = cityObj.temperatureMetricValue;
        this.currentCityTemperature.temperatureMetricUnit = cityObj.temperatureMetricUnit;
    }

    @computed get getCurrentCityTemperature() {
        return {
            name:this.currentCityTemperature.name,
            temperatureMetricValue:this.currentCityTemperature.temperatureMetricValue,
            temperatureMetricUnit:this.currentCityTemperature.temperatureMetricUnit
        }
    }
}

const store = new CurrentCityTemperatureStore();
export default store;