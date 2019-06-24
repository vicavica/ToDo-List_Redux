import React from 'react';
import TodoListElement from './TodoList-el';
import './TodoList.css';

export default function TodoList ({todoList, markImportant, markDone, deleteTodo}) {
    const elementsFiltered = todoList.filter((todoItem, index) => {
        if(todoItem.filteredOut) {
            return false;
        }
        return true;
    });

    const elements = elementsFiltered.map(
        todo =>
            <li key = {todo.id} className ='list-group-item'>
                <TodoListElement
                    onMarkImportant = {() => markImportant(todo.id)}
                    onMarkDone = {() => markDone(todo.id)}
                    onDelete = {() => deleteTodo(todo.id)}
                    label = {todo.text}
                    done = {todo.done}
                    important = {todo.important}/>
            </li>
    );

    return (
        <ul className = 'todo-List'>
            {elements}
        </ul>
    );
};
