import React, { Component } from 'react'

export default class Forms extends Component {
    state = {
        name:"Please enter name",
        country:"India",
        rememberMe:true
    }
    // nameChange=(e)=>{
    //     this.setState({name: e.target.value});
    // }
    // selectChange=(e)=>{
    //   this.setState({Country:e.target.value})
    // }

    handleAll = (event,inputName,isChecked)=>{
      this.setState({
        [inputName] : isChecked ? event.target.checked : event.target.value
      })

    }

    handleSubmit = (e) =>{
      e.preventDefault();
      console.log(this.state);
    }



  render() {
    return (
      <div>
        <form action='#' onSubmit={this.handleSubmit}>
        <input type='text' 
        value={this.state.name} 
        onChange={(event)=>this.handleAll(event,"name")} />

        <select onChange={(event)=>this.handleAll(event,"country")} 
        value={this.state.country}>
          <option>Select an option</option>
          <option>India</option>
          <option>USA</option>
          <option>UAE</option>
        </select>
        <input type='checkbox' 
        checked={this.state.rememberMe} 
        value={this.state.rememberMe}
        onChange={(event)=>this.handleAll(event,"rememberMe",true)} />
        
        
        <br />
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
