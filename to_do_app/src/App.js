import React, { Component } from 'react'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import {library } from '@fortawesome/fontawesome-svg-core'
import {faTrash } from '@fortawesome/free-solid-svg-icons'
import {faEdit } from '@fortawesome/free-solid-svg-icons'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import SortTodo from './components/SortTodo';

library.add(faTrash)
library.add(faEdit)
library.add(faCheck)

class App extends Component {

  state = {
    todos: []
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo;
    }) })
}
compareBy(key) {
  return function (a, b) {
    if (""+a[key]<(""+b[key])) return -1;
    if (""+a[key]>(""+b[key])) return 1;
    return 0;
  };}
  
sortTodo = (title) =>{
  let arrayCopy = [...this.state.todos];
  arrayCopy.sort(this.compareBy(title));
//arrayCopy.reverse(); for descending
  this.setState({data: arrayCopy});
}


//Edit Todo
editTodo = (id,event) => {
  this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
          todo.title = event.target.value
      }
      return todo;
  }) })
}

//Delete Todo
deleteTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

//Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false,
    isOldestFirst:true
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}


  render() {
    return (
      <div className="App">
         <header>
            <p>Task Manager</p>
        </header>
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <SortTodo sortTodo={this.sortTodo}/>
          <Todos 
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo} 
            editTodo={this.editTodo}
            //sortTodo={this.sortTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
