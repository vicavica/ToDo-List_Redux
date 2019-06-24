import React from 'react';
import './AddTodo.css';

export default function AddTodo(props) {
    const {addTodo} = props;
    let input;
    return(
        <form
            className = 'item-add d-flex'
            onSubmit = {e => {
                e.preventDefault();
                if (!input.value.trim()) { // using the input variable
                    return
                }
                addTodo(input.value); // using the input variable
                input.value = ''
            }}>

            <input type = 'text'
                   className = 'form-control'
                   ref={node => {
                       input = node // assign the node reference to the input variable
                   }}
            />
            <button type = 'submit'>Add</button>
        </form>
    )
}
