import React from 'react'
import './Todoitem.css'
import PropTypes from 'prop-types'

function optionsFunction(props){
        return (
            <div>
            <button className="options" onClick={props.sortTodo}>Sort List</button>
            <button className="options" onClick={props.deleteAllTodo}>Clear List</button>
            <button className="options" onClick={props.deleteCheckTodo}>Delete Tasks Completed</button>
            </div>
        )
}           

optionsFunction.propTypes = {
    sortTodo: PropTypes.func.isRequired,
    deleteAllTodo: PropTypes.func.isRequired,
    deleteCheckTodo: PropTypes.func.isRequired
}

export default optionsFunction
