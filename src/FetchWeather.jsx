import React, { Component } from 'react'

export default class FetchWeather extends Component {
    
      state = {
        name:"",
        data:[],
        weather:[],
        flag:false
      }

    FetchUrl = async() =>{
        const urlToHit = await fetch("https://freetestapi.com/api/v1/weathers");
        const data = await urlToHit.json();
        this.setState ({data : data});
        // console.log(this.state.data);
    }
    componentDidMount(){
      this.FetchUrl();
    }
    getData = ()=>{
      const { data, name } = this.state;
    
      const matchingCity = data.find((element) => element.city === name);
      // data.forEach((element) => {
      //   if(element.city === name){
      //      matchingCity = element;
      //   }
      // });
        if(matchingCity){
          this.setState({weather:matchingCity, flag:true});

        }
        else {
          this.setState({ weather: [], flag: false });
        }
    
    }
    handleChange = (e) =>{
      this.setState({name:e.target.value});
    }
    
  render() {
    return (
      <div>
        <input type="text" name='name' placeholder='enter your text' 
        onChange={this.handleChange}
        ></input>
        <button onClick={this.getData}>Search</button>
        <div>
          {!this.state.weather || !this.state.flag ? "No Details" : JSON.stringify(this.state.weather)}
        </div>
        
      </div>
    )
  }
}

