export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_DONE = 'MARK_DONE';
export const MARK_IMPORTANT = 'MARK_IMPORTANT';
export const SEARCH_TODO = 'SEARCH_TODO';

let globalTodoItemId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: globalTodoItemId++,
    text
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
});

export const markDone = id => ({
    type: MARK_DONE,
    id
});

export const markImportant = id => ({
    type: MARK_IMPORTANT,
    id
});

export const searchTodo = text => ({
    type: SEARCH_TODO,
    text
});