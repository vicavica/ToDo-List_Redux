import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {markDone, markImportant, deleteTodo} from '../actions/Actions';

const mapStateToProps = state => ({
    todoList: state
});

const mapDispatchToProps = dispatch => ({
    markDone: id => dispatch(markDone(id)),
    markImportant: id => dispatch(markImportant(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);