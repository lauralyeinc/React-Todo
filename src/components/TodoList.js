
import React from 'react'; 

import Todo from "./Todo.js"; 

const TodoList = props => {

    return (
        <div className="Todo-List">
        {props.ToDos.map(todo => (
        <Todo 
        handleToggle={props.handleToggle}
        key={todo.id} todo={todo} />
        ))}  
        </div>
    );
};

export default TodoList; 