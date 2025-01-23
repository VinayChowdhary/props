import React, { Component } from 'react'
import Products from './Products'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {products:[
            {pid:10,pname:"Nuts"},
            {pid:11,pname:"Tea"},
            {pid:12,pname:"Biscuits"},
            {pid:13,pname:"Chocolates"}
        ]}
    }
  render() {
    return (
      <div>
        <h2>Products List :</h2>
      {this.state.products.map((pr)=>{
        return(
            <>
            <Products key={pr.pid} id={pr.pid} name={pr.pname}/></>
        )
      })}
      </div>
    )
  }
}
