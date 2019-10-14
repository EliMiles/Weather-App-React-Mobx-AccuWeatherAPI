import { observable, action, computed } from 'mobx';

class CityKeysStore {
    @observable cityKeys = [
        {
            name : 'tel aviv',
            key : '215854'
        }
    ];

    @action addCityKey = (cityKey) => {
        this.cityKeys.push(cityKey);
    }

    @computed get getAllCityKeys() {
        let arr = [];
        const storeLength = this.cityKeys.length;
        for(let i=0;i<storeLength;i++){
            const name = this.cityKeys[i].name;
            const key = this.cityKeys[i].key;
            const cityObj = {name:name,key:key};
            arr.push(cityObj)
        }
        return arr;
    }
}

const store = new CityKeysStore();
export default store;