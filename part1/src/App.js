import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Single from './components/single/single';

class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      toDoList: [],
      newToDo: {}
    }
  }


  componentDidMount = () =>{
    axios.get('https://practiceapi.devmountain.com/api/tasks')
      .then(res => this.setState({
        toDoList: res.data,
        newToDo: {
          title: "",
          complete: false,
          id: res.data.length
        }
      }))
      .catch(error => console.log(error))
  }


  handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      let newToDo = Object.assign({}, this.state.newToDo);
      newToDo[name] = value;

      this.setState({
        newToDo: newToDo
      })
    }


    add = () =>{
      if (this.state.newToDo.title !== ""){
          axios.post(`https://practiceapi.devmountain.com/api/tasks/`, {title : this.state.newToDo.title} ).then( res =>{
            console.log('res', res)
            let newToDoList = Object.assign({}, this.state.toDoList);
            newToDoList = res.data;

            this.setState({
              toDoList: newToDoList,
              newToDo : {
                title: "",
                complete: false,
                id: ""
              }
            })
          })
        }}

   remove = (id) =>{
     axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then( res =>{
       let newToDoList = Object.assign({}, this.state.toDoList);
       newToDoList = res.data;

       this.setState({
         toDoList: newToDoList,
         newToDo : {
           title: "",
           complete: false,
           id: ""
         }
     })

   })}

   complete = (id) =>{
     axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`, 'completed').then( res =>{
       console.log('ressComplete', res)
       let newCompleted = Object.assign({}, this.state.toDoList);
       newCompleted = res.data;
       this.setState({
         toDoList: newCompleted
     })
     console.log('state', this.state)

   })}


  render() {
    return (
      <div className="wrapper">

        <div className="form">
          <input
            name="title"
            value={this.state.newToDo.title}
            placeholder="Title"
            onChange={this.handleChange}
            />
          <button onClick={() => this.add()}>
              +
          </button>
        </div>

        <div className="list">
          <ul>
            {this.state.toDoList.map(item =>{
              return(
                <Single title = {item.title} completed = {item.completed} completeTask = {this.complete} id={item.id}  remove={this.remove} key={item.id}/>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
