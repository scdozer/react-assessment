import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      toDoList: [],
      newToDo: {
        title: "",
        complete: false,
        id: ""
      }
    }
  }

componentDidMount = () =>{
  axios.get('https://practiceapi.devmountain.com/api/tasks')
    .then(res => this.setState({toDoList: res.data}))
    .catch(error => console.log(error))
}
