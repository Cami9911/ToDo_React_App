import React, { Component } from 'react'
import './About.css'

export class About extends Component {
    render() {
        return (
            <React.Fragment >
                <div className="about">
                <h1>About</h1>
                <p>This is the Task Manager app made in React.</p>
                <p>This application allows you to add, delete, edit and mark tasks as completed.</p>
                <p>It also allows the complete deletion of tasks, the deletion of only completed tasks and the sorting of the entire list.</p>
                </div>
            </React.Fragment>
        )
    }
}

export default About
