// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react"; 

const TodoForm = props => {

    // handleChanges = event => {
    //     this.setState({
    //         TodoItem: event.target.value
    //     }); 
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.TodoItem !== " ") {
    //         this.props.addItem(this.state.TodoItem);
    //         this.setState({
    //             TodoItem: ""
    //         }); 
    //     }
    // }

        return (
            <div> 
                <form>
                    <input 
                    onChange={props} 
                    type='text' 
                    name="Add To Do" 
                    value={props} 
                    /> 
                    <button onClick={prop} className="Submit-Button"> Submit!  </button>
                    <button onClick={prop} className="Clear-Button"> Clear Completed </button>
                </form>
            </div>
        )
} 

export default TodoForm; 
