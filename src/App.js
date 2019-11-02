// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.ß

import React from 'react';

import TodoData from "./components/TodoData.js"; 
import TodoList from "./components/TodoList.js"; 
import TodoForm from "./components/TodoForm.js"; 

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      chores: TodoData
    }; 
  }
  
  render() {
    console.log("App.js: rendering"); 
    return (
      <div>
        <div> 
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        </div>
        <TodoList chores={this.state.chores} /> 
      </div>
    );
  }
}

export default App;
