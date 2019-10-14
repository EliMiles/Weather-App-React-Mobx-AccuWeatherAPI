import { observable, action, computed } from 'mobx';

class CurrentSelectedCityStore {
    @observable currentSelectedCity = {name:'tel aviv',key:'215854'};

    @action changeCurrentSelctedCity = (cityObj) => {
        this.currentSelectedCity.name = cityObj.name;
        this.currentSelectedCity.key = cityObj.key;
    }

    @computed get getCurrentSelctedCity() {
        return {name:this.currentSelectedCity.name,key:this.currentSelectedCity.key}
    }
}

const store = new CurrentSelectedCityStore();
export default store;