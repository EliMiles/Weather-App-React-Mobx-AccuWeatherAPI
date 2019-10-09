import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TodosStore')
@observer
class Test extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const todo = this.todo.value;
        this.props.TodosStore.addTodo(todo);
        this.todo.value = '';
    }

    render() {
        const {TodosStore} = this.props;

        return (
            <div>
                <h2>You have {TodosStore.todoCount} todos</h2>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" placeholder="Enter todo" ref={input => this.todo = input}/>
                    <button>Add todo</button>
                </form>

                <ul>
                    {TodosStore.todos.map((todo,index) => (
                        <li key={index}>
                            {todo}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Test;
