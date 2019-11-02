
import React from 'react'; 

import Todo from "./Todo.js"; 

const TodoList = props => {
console.log("ToDoList.js:  I am working here");  //yes 
    return (
        <div>
            {props.ToDos.map(ToDo => (         // mapping over the ToDo List to make each ToDo "card"
            <Todo 
            handleToggle={props.handleToggle}    // Each ToDo "card"
            key={ToDo.id} ToDo={ToDo} />
            ))}  
        </div>
    );
};

export default TodoList; 