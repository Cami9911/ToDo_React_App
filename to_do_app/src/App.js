import React, { Component } from 'react'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import {library } from '@fortawesome/fontawesome-svg-core'
import {faTrash } from '@fortawesome/free-solid-svg-icons'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import OptionsTodo from './components/OptionsTodo';

library.add(faTrash)
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

//Reverse list
sortTodo=()=>{
  this.setState({ todos: [...this.state.todos.reverse(todo => todo.completed === true)]})
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
//Delete all Todo
deleteAllTodo=()=>{
  this.setState({ todos: [...this.state.todos.filter(todo => todo.title === true)]})
}
//Delete check Todo
deleteCheckTodo=()=>{
  this.setState({ todos: [...this.state.todos.filter(todo => todo.completed === false)]})
}

//Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false,
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
          <AddTodo addTodo={this.addTodo} />
          <OptionsTodo
            sortTodo={this.sortTodo}
            deleteAllTodo={this.deleteAllTodo}
            deleteCheckTodo={this.deleteCheckTodo} />
          <div className="scrollArea">
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              deleteTodo={this.deleteTodo}
              editTodo={this.editTodo}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
