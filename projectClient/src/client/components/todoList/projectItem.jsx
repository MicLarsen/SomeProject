import React, { Component } from 'react'

module.exports = class ProjectItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.deleteProject = this.deleteProject.bind(this)
    }
    deleteProject(id) {
this.props.onDelete(id)
    }
    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}:</strong>{this.props.project.category} 
                <a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>  
            </li>
        )
    }
}