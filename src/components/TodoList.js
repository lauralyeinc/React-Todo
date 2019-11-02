
import React from 'react'; 

import Todo from "./Todo.js"; 

const TodoList = props => {
console.log("ToDoList.js:  I am working here");  //yes 
    return (
        <div>
            {props.ToDos.map(ToDo => (
            <Todo 
            handleToggle={props.handleToggle}
            key={ToDo.id} ToDo={ToDo} />
            ))}  
        </div>
    );
};

export default TodoList; 