import { observable, action, computed } from 'mobx';

class TodosStore {
    @observable todos = [];

    @action addTodo = (todo) => {
        this.todos.push(todo);
    }

    @computed get todoCount() {
        return this.todos.length;
    }
}

const store = new TodosStore();
export default store;