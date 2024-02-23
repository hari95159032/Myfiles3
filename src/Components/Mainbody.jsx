import React, { Component } from 'react'

export default class Mainbody extends Component {
  render() {
    return (
      <>
      Addition:{this.props.addNumbers(4,5)}
      </>
    )
  }
}
