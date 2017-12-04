import React from 'react'
import Axios from 'axios'

class Withpromises extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}, 
    } 
    this.fetchData = this.fetchData.bind(this)
}

fetchData() {        
    Axios.get('http://localhost:4444/api/securerandoms', {
        headers: {
            'Content-Type': 'application/jsonp',
            
            
        }
    })
    .then(function (response) {
      this.setState({data: response})
    })
    .catch(function (error) {
      console.log(error);
    });
}
    render() {
        this.fetchData()
        return (
            <div>
            {JSON.stringify(this.state.data)}                
            </div>
        )
    }
}


module.exports = Withpromises