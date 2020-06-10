import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import uuid from 'uuid'

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with parents',
        completed: false
      }
    ]
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
handleInput(e){
  this.setState({
    currentItem:{
      id:uuid.v4(),
      title: e.target.value,
      checked:false
    }
  })
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
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos 
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo} 
            editTodo={this.editTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
