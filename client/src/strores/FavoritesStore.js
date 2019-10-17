import { observable, action, computed } from 'mobx';

class FavoritesStore {
    @observable favoriteCities = [];

    @action addFavoriteCity = (favoriteCityToAdd) => {
        let isExist = false;

        for(let i=0;i<this.favoriteCities.length;i++){
            if(this.favoriteCities[i] === favoriteCityToAdd){
                isExist = true;
                break;
            }
        }

        if(!isExist){
            this.favoriteCities.push(favoriteCityToAdd);
        }
    }

    @action removeFavoriteCity = (favoriteCityToRemove) => {
        this.favoriteCities = this.favoriteCities.filter((favoriteCityItem) => {
            return favoriteCityItem !== favoriteCityToRemove
        });
    }

    @computed get getFavoriteCities() {
        let arr = [];

        for(let i=0;i<this.favoriteCities.length;i++){
            arr.push(this.favoriteCities[i]);
        }

        return arr;
    }
}

const store = new FavoritesStore();
export default store;