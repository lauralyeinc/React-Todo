// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react"; 

const TodoForm = props => {

        return (
            <div> 
                <form>
                    <input 
                    onChange={props.handleChangeTodo} 
                    type='text' 
                    name="Add To Do" 
                    value={props.value} 
                    /> 
                    <button 
                    onClick={props.handleChangeTodo} 
                    className="Submit-Button"> 
                    Submit!  </button>
                    <button onClick={props.handleChangeAddTodo}
                    className="Clear-Button">
                    Clear Completed </button>
                </form>
            </div>
        )
} 

export default TodoForm; 
