// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.ß

import React from 'react';

import TodoList from "./components/TodoList.js"; 
import TodoForm from "./components/TodoForm.js"; 

import Todo from './components/Todo.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      ToDos: [
        {
            task: "Wash The Dishes",
            id: 473894729384,
            completed: false 
        },
        {
            task: 'Take out the Trash',
            id: 834293847293478,
            completed: false
        },
        {
            task: "Do Laundry",
            id: 9847239847,
            completed: false
        }
      ],
      ToDo: " "
    }; 
  }
  
  handleChangeAddTodo = event => {
    event.preventDefault();
    const newToDo = { task: this.state.ToDo, completed: false, id: Date.now() };
    this.setState({
      ToDo: [...this.state.ToDos, newToDo],       // taking all todos and adding the new tdo to all.
      ToDos: ""       // resetting the input field to empty todo 
    });
  }; 
  

  handleChangeTodo = event => {
    this.setState({ [event.target.name]: event.target.value });    //? 
  }


  toggleTodo = id => {
    let ToDos = this.state.ToDos.slice();
    ToDos = ToDos.map(ToDo => {
      if (ToDo.id === id ) {
        ToDo.completed = !ToDo.completed; 
        return ToDo;
      } else {
        return Todo;
      }
    });
    this.setState({ ToDos }); 
  }; 

  clearCompleted = event => {
    event.preventDefault();
    let ToDos = this.state.ToDos.filter(ToDo => !ToDo.completed); 
    this.setState({ ToDos });
  }; 
  
  render() {
    console.log("App.js: rendering");      // yes 
    return (
      <div>
        <div> 
        <h2>Welcome, Let's Get this Done! </h2>
        <TodoForm 
        value={this.state.ToDo} 
        handleChangeClearTodo={this.clearCompleted}
        handleChangeAddTodo={this.addNewTodo}
        handleChangeTodo={this.handleChange}
        /> 
        </div>
        <TodoList chores={this.state.ToDos}
        handleToggle={this.toggleTodo}
        /> 
      </div>
    );
  }
}

export default App;
