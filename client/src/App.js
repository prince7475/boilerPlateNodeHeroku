import React, { Component } from 'react'
import axios from 'axios';
export default class App extends Component {
  componentDidMount(){
    axios.get('/users').then(res =>{ console.log(res.data)})
  }
  render() {
    return (
      <div>
        This is react app
      </div>
    )
  }
}
