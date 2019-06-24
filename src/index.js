import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import todoListReducer from './reducer/TodoListReducer';
import ElSearch from './containers/Search';

const store = createStore(todoListReducer); // initialized store with reducer

render(
    <Provider store={store}>
        <div>
            <AddTodo />
            <TodoList />
        </div>
        <div className = 'btn-group'>
            <ElSearch />
        </div>
    </Provider>,
    document.getElementById('root')
);