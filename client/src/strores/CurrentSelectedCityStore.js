import { observable, action, computed } from 'mobx';

class CurrentSelectedCityStore {
    //@observable currentSelectedCity = 'tel aviv';
    @observable currentSelectedCity = {name:'tel aviv',key:'215854'};

    // @action changeCurrentSelctedCity = (cityName) => {
    //     this.currentSelectedCity = cityName;
    // }
    @action changeCurrentSelctedCity = (cityObj) => {
        this.currentSelectedCity.name = cityObj.name;
        this.currentSelectedCity.key = cityObj.key;
    }

    // @computed get getCurrentSelctedCity() {
    //     return this.currentSelectedCity;
    // }
    @computed get getCurrentSelctedCity() {
        //return this.currentSelectedCity;
        return {name:this.currentSelectedCity.name,key:this.currentSelectedCity.key}
    }
}

const store = new CurrentSelectedCityStore();
export default store;