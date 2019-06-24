import { connect } from 'react-redux';
import {addTodo} from "../actions/Actions";
import AddTodo from "../components/AddTodo";

const mapDispatchToProps = dispatch => ({
    addTodo: id => dispatch(addTodo(id))
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);