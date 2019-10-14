import { observable, action, computed } from 'mobx';

class CurrentSelectedCityStore {
    @observable currentSelectedCity = 'tel aviv';

    @action changeCurrentSelctedCity = (cityName) => {
        this.currentSelectedCity = cityName;
    }

    @computed get getCurrentSelctedCity() {
        return this.currentSelectedCity;
    }
}

const store = new CurrentSelectedCityStore();
export default store;