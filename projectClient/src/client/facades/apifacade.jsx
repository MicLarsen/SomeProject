

class apifacade {
 let fetchData = () => {        
        fetch('localhost:8088/api/securerandoms').
        then(response => response.json()).
        then(resonse => this.setState({data: response}))
        console.log(this.state.data)
}