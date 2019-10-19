import { observable, action, computed } from 'mobx';

class FavoritesStore {
    @observable favoriteCities = [];

    @action addFavoriteCity = (favoriteCityObjToAdd) => {
        let isExist = false;

        for(let i=0;i<this.favoriteCities.length;i++){
            if(this.favoriteCities[i].name === favoriteCityObjToAdd.name){
                isExist = true;
                break;
            }
        }

        if(!isExist){
            this.favoriteCities.push(favoriteCityObjToAdd);
        }
    }

    @action removeFavoriteCity = (favoriteCityToRemove) => {
        this.favoriteCities = this.favoriteCities.filter((favoriteCityItem) => {
            return favoriteCityItem.name !== favoriteCityToRemove;
        });
    }

    @computed get getFavoriteCities() {
        let arr = [];

        for(let i=0;i<this.favoriteCities.length;i++){
            arr.push({
                name:this.favoriteCities[i].name,
                key:this.favoriteCities[i].key
            });
        }

        return arr;
    }
}

const store = new FavoritesStore();
export default store;