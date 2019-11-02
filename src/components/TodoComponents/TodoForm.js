// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react"; 

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            TodoItem: ""
        };
    }

    handleChanges = event => {
        this.setState({
            TodoItem: event.target.value
        }); 
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.TodoItem !=== "") {
            this.props.addItem(this.state.TodoItem);
            this.setState({
                TodoItem: ""
            }); 
        }
    }

    render() {
        console.log('TodoForm.js: rendering'); 
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <input 
                    onChange={this.handleChanges} 
                    type='text' name="Start a To Do" 
                    value={this.state.TodoItem} /> 
                    <button> Add To Do!  </button>
                </form>
            </div>
        )
    }
}

export default TodoForm; 
