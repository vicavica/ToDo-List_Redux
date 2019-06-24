import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {markDone, markImportant, deleteTodo} from '../actions/Actions';

const mapStateToProps = state => ({ //is the entire Redux store state (the same value returned by a call to store.getState()). Because of this, the first argument is
                                    // traditionally just called state. (While you can give the argument any name you want,
                                    // calling it store would be incorrect - it's the "state value", not the "store instance".)
    todoList: state
});

//mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just mapState for short.
//
// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.

const mapDispatchToProps = dispatch => ({
    markDone: id => dispatch(markDone(id)), // inside of dispatch() our store uses reducer() to get the new state, passing in the current state and the action
    markImportant: id => dispatch(markImportant(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
    mapStateToProps, //will be called every time when the Redux store state changes. If you do not wish to subscribe to the store, pass null or undefined to connect in place of mapStateToProps
    mapDispatchToProps //is used for dispatching actions to the store
)(TodoList);