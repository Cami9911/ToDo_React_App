import React, { Component } from 'react'
import './Todoitem.css'

function sortFunction(props){
        return (
            <button onClick={props.sortTodo}>Sort</button>
        )
}

export default sortFunction
