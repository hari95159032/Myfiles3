import React, { Component } from 'react'

export default class DigitalClock extends Component {
    constructor(props){
        super(props);
        this.state={
            time:new Date().toLocaleTimeString()
        }
    
    
    }
    componentDidMount(){
      this.intervalId = setInterval(() => {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      }, 1000);
    }
    componentWillUnmount(){
      clearInterval(this.intervalId);
    }
    


  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}
