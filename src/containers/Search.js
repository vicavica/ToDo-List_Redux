import { connect } from 'react-redux';
import ElSearch from '../components/El-search';
import {searchTodo} from '../actions/Actions'
    ;
const mapStateToProps = state => ({
    todoList: state
});

const mapDispatchToProps = dispatch => ({
    searchTodo: id => dispatch(searchTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ElSearch);