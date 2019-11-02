// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react"; 

const Todo = props => {
    return (
        <div style={props.ToDo.completed ? {textDecoration: 'line-through'} : null}
        onClick={() => props.handleToggle(props.ToDo.id)} >
            {props.ToDo.task}
        </div>
    );
};

export default Todo; 