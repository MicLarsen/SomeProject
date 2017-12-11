import React, { Component } from 'react'
import ProjectItem from './projectitem'

module.exports = class Projects extends Component {
    
    constructor(props) {
        super(props)
        this.state = {}
        this.deleteProject = this.deleteProject.bind(this)
    }
    deleteProject(id) {
        this.props.onDelete(id)
    }

    render() {
        let item
        if(this.props.projects) {
            item = this.props.projects.map(project => {
                 return (
                    <ProjectItem onDelete={this.deleteProject} key={project.id} project={project} /> 
                 )
            })
        }
        return (
            <div className="Projects">
            <h3>Latest Projects</h3>
                {item}
            </div>
        )
    }
}
