import React, { Component } from 'react';

class SSETest extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.eventSource = new EventSource('http://localhost:5000/SSE');

        this.sleep(2000).then(()=>{
            if(this.eventSource.readyState === 0 || this.eventSource.readyState === 2){
                console.log("Attempting to reconnect to SSE...");
                this.eventSource = new EventSource('http://localhost:5000/SSE');
            }
        })

        this.eventSource.onopen = (e) => {
            console.log("Connected to SSE...");
        };

        //Function binds
        this.updateCount = this.updateCount.bind(this);
    }


    // sleep time expects milliseconds
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    componentDidMount() {
        this.eventSource.addEventListener('countUpdate', (e) => this.updateCount(JSON.parse(e.data)))
        this.eventSource.addEventListener('alertUpdate', (e) => console.log(JSON.parse(e.data)))
    }

    updateCount(data) {
        console.log(data);
        var counter = JSON.parse(data);
        this.setState({count: counter})
    }
    

    componentWillUnmount(){
        console.log("Disconnecting from SSE...")
        this.eventSource.close();
    }

    render() {
        return (
            <div>
                <p>Count variable: {this.state.count}</p>
            </div>
        );
    }

}

export default SSETest;