import React, { Component } from 'react'
import './Todoitem.css'


export class AddTodo extends Component {
    state = {
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''}) //clean input
    }

    onChange = (e) =>this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <input className="inputText" type="text" value={this.state.title} name="title" 
                placeholder="Add Tasks..." onChange={this.onChange}></input>
                <input type="submit" value="Submit" className="btn"></input>
            </form>
        )
    }
}

export default AddTodo
