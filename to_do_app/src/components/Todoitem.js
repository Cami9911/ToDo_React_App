import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todoitem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export class Todoitem extends Component {
    getStyle = () => {
            return {
                textDecoration: this.props.todo.completed ? 'line-through': 'none',
                color: this.props.todo.completed ? 'rgb(241, 58, 58)': 'white',
            }
    }
 
    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="tasks">
                <p>
                    <input id="title" type="text" value={title} style={this.getStyle()} onChange={this.props.editTodo.bind(this,id)}/>
                    <FontAwesomeIcon id="check" icon="check" type="checkbox" onClick={this.props.markComplete.bind(this,id)} />
                    <FontAwesomeIcon id="delete" icon="trash" onClick={this.props.deleteTodo.bind(this,id)}/>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
}

export default Todoitem
