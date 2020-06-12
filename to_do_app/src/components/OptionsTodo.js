import React from 'react'
import './Todoitem.css'

function optionsFunction(props){
        return (
            <div>
            <button className="options" onClick={props.sortTodo}>Sort List</button>
            <button className="options" onClick={props.deleteAllTodo}>Clear List</button>
            <button className="options" onClick={props.deleteCheckTodo}>Delete Tasks Completed</button>
            </div>
        )
}           

export default optionsFunction
