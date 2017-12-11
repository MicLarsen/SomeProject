import React, { Component } from 'react'
import UUID from 'uuid'
import Projects from '../components/todolist/projects'
import AddProject from '../components/todolist/addproject'


module.exports = class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
        }
        this.handleAddProject = this.handleAddProject.bind(this)
        this.handleDeleteProject = this.handleDeleteProject.bind(this)
    }

componentWillMount() {
    this.setState({projects: [ 
        {
        id: UUID.v4(),
        title: 'Vanilla Javascript',
        category: 'Period-1' 
        },{   
        id: UUID.v4(),
        title: 'ExpressJS',
        category: 'Period-2' 
        },{
        id: UUID.v4(),
        title: 'ReactJS',
        category: 'Period-3' 
        }
    ]})
}
handleAddProject(project) {
    let projects = this.state.projects
    projects.push(project)
    this.setState({projects: projects})
}
handleDeleteProject(id) {
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)   
    this.setState({projects: projects})
}
    render() {
        return (
            <div>
            Home - ToDo List:
            <AddProject addProject={this.handleAddProject}/>
            <br/>
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject}/>
            </div> 
        )
    }
}
