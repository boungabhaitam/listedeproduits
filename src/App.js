import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import Products from './components/products';

export default class App extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    
    return (
      <Products
   />
    )
  }
}

