// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react"; 

const Todo = props => {
    let ActionTodo = "ToDoItem";
    if(props.TodoItem.completed) {
        ActionTodo = ActionTodo + 'completed'; 
    }

    return (
        <div className={`TodoItem${props.TodoItem.completed ? ' purchased ' : " "}`}>
            <p>{props.item.mane}</p>
        </div>
    );
};

export default Todo; 