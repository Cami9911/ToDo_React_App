import React, { Component } from 'react'
import './Todoitem.css'


export class AddTodo extends Component {
    state = {
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        let error=false
        this.setState({
            message: ""
        })
        if (this.state.title === "") {
            error=true;
            this.setState({
                message: "Please insert a task."
            })
        }
        else {
            this.props.addTodo(this.state.title);
            this.setState({ title: '' }) //clean input
        }
    }

    onChange = (e) =>this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div style={{color:'rgb(241, 58, 58)'}}>
            {this.state.message } 
            <form className="form" onSubmit={this.onSubmit}>
                <input className="inputText" type="text" value={this.state.title} name="title" 
                placeholder="Add Tasks..." onChange={this.onChange}></input>
                <input type="submit" value="Submit" className="btn"></input>
            </form>
            </div>
        )
    }
}


export default AddTodo
