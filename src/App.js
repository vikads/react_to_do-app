import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompited: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCopmleted: false }
      ]
    };
  }


  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } />
          )}
          //We use an ES6 arrow function for convenience,//
          //and we enclose the call to .map() inside of curly braces,
          //which tells JSX to evaluate the code between the braces as JavaScript.
          //We also specify a key attribute on ToDo, and we assign it the index.
          //For React to operate properly, each child of an array or iterator
          // needs to have a key with a unique value.
          // The key gives React a reliable way of distinguishing between array items.
        </ul>
      </div>
    );
  }
}

export default App;
