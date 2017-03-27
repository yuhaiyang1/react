import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, addTodo2 } from '../actions';
var val = 'on';
const AddTodo = ({ txt, onIncrement }) => {
    return (
        <div>
            <input type='button' onClick={(function (e) {
                val = e.target.value;
                onIncrement(val == 'on' ? addTodo() : addTodo2());
            })} value={txt} />
        </div>
    );
};
AddTodo.propTypes = {
    onIncrement: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    console.log(state);
    return { txt: state.todos.txt };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: (val) => dispatch(val)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
