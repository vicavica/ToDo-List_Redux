import { ADD_TODO, MARK_DONE, MARK_IMPORTANT, DELETE_TODO, SEARCH_TODO } from '../actions/Actions'

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [    // a new array
                ...state, // explode the old state first
                {         // then add the new item at the end
                    id: action.id,
                    text: action.text,
                    done: false,
                    important: false,
                    filteredOut: false // if filtered out just dont display those items
                }
            ];

        case MARK_DONE:
            return state.map((todoItem, index) => {
                if(todoItem.id === action.id) {
                    return {
                        ...todoItem,
                        done: !todoItem.done
                    };
                }

                return todoItem;
            });

        case MARK_IMPORTANT:
            return state.map((todoItem, index) => {
                if(todoItem.id === action.id) {
                    return {
                        ...todoItem,
                        important: !todoItem.important
                    };
                }

                return todoItem;
            });

        case DELETE_TODO:
            return state.filter((todoItem, index) => {
                if(todoItem.id === action.id) {
                    return false;
                }

                return true;
            });

        case SEARCH_TODO:
            return state.map((todoItem, index) => {
                return {
                    ...todoItem,
                    filteredOut: !todoItem.text.includes(action.text)
                };
            });

        default:
            return state
    }
};

export default todoListReducer;
