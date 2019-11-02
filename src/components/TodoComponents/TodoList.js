// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//- Your todo list should display a list of todos, an input field, 
// a submit button, and a clear all button.
// - `<TodoList />` receives your Todos array and iterates over the list 
// generating a new `<Todo />` for each element in the array.

import React from 'react'; 

import Todo from "./Todo.js"; 

const TodoList = props => {
    return (
        <div className="ToDo-List">
        {props.}    
        </div>
    )
}