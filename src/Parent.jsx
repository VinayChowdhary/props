import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        {/* <Child name="SpongeBob" age="22"/> */}
        <Child name="Vinay"/>
        <Child name="Charan"/>
        <Child name="Pavan"/>
      </div>
    )
  }
}
