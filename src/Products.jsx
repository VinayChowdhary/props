import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
        
      <div> 
        <ul>
            <li>{this.props.id}</li>
            <li>{this.props.name}</li>
        </ul>
      </div>
    )
  }
}
