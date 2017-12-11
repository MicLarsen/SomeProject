import React, { Component } from 'react'
import UUID from 'uuid'

module.exports = class AddProject extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            newProject: {},
            categories: ['Period-1','Period-2','Period-3','Period-4','Period-5']
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        if(this.refs.title.value === ''){
            alert('Title is required')
        } else {
            this.setState({newProject: {
                id: UUID.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value,
            }}, () => {
                console.log(this.state)
                this.props.addProject(this.state.newProject)
            })
        }
        e.preventDefault();

    }

    render() {
        let categoryOptions = this.state.categories.map(category => {
            return <option key={category} value={this.value}>{category}</option>
        })
        return (
            <div className="Add-Projects">
                <h3> Add Project</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Titel</label><br />
                        <input type='text' ref='title' />
                    </div>
                    <div>
                        <label>Category</label><br />
                    <select ref='category'>
                        {categoryOptions}
                    </select>
                </div>
                <input type='submit' value='submit' />
               </form>
            </div>
        )
    }
}