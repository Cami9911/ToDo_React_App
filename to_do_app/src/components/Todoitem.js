import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
    getStyle = () => {
            return {

                textDecoration: this.props.todo.completed ? 'line-through': 'none'
            }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.markComplete}/>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
