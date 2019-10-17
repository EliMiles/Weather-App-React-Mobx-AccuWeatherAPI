import { observable, action, computed } from 'mobx';

class FavoriteHomepageStore {
    @observable favoriteHomepage = {state:false};

    @action changeState = (newState) => {
        this.favoriteHomepage.state = newState;
    }

    @computed get getState() {
        return this.favoriteHomepage.state;
    }
}

const store = new FavoriteHomepageStore();
export default store;