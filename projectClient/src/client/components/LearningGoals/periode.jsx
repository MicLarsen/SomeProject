import React, { Component } from 'react'
import CallApi from '../../components/callApi'
import _LearningGoals from './learningGoals'

module.exports = class Periode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Titles: [],
            QnA: [],
        }
    }
    componentDidMount() {
        CallApi.callApi('periodes/' + this.props.periode)
            .then((data) => {
                this.setState({ Titles: data.data })
                this.setState({ QnA: data.data.subjects })
            })
            .catch(err => console.log('There was an error:' + err))
    }
    render() {
        return (
            <div>
                <h3>Periode {this.state.Titles.periode}</h3>
                <h4>{this.state.Titles.periodeTitle}</h4>
                <_LearningGoals key={this.state.Titles.periode} item={this.state.QnA} />
            </div>
        )
    }
}
//<periodeAssignments />