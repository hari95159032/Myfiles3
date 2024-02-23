import React, { Component } from 'react'

export default class AddNumbers extends Component {
    state={
        count:this.props.counter
    }
    IncrementOfCount = () =>{
        this.setState({count: this.state.count+1}) 
    }
    DecrementOfCount = () =>{
      this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.IncrementOfCount}>Increment</button>
        <button onClick={this.DecrementOfCount}>Decrement</button>
      </div>
    )
  }
}
