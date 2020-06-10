import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
    getStyle = () => {
            return {

                textDecoration: this.props.todo.completed ? 'line-through': 'none'
            }
    }
  
    render() {
        const { id, title } = this.props.todo;
        return (
            <div >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
                    <input type="text" value={title} style={this.getStyle()} onChange={this.props.editTodo.bind(this,id)}/>
                    <button onClick={this.props.deleteTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
