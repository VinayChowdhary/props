import React, { Component } from 'react'

export default class Child extends Component {
  //eslint-disable-next-line
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {/* <h1>This is props</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>Age:{this.props.age}</h2> */}
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}
