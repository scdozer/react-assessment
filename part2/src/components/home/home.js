import React, { Component } from 'react';
import { connect } from 'react-redux';
import Single from '../single/single';

import { getAllToDos, addToDo, removeToDo, completeToDo } from '../../redux/properties';


class Home extends Component {
  constructor (props){
    super(props);
    this.state ={
      newToDo: {}
    }
  }


  componentDidMount = () =>{
    if (!this.props.toDoList.length){
      this.props.getAllToDos();
    }
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


    add = () => {
      if (this.state.newToDo.title !== ""){
        this.props.addToDo(this.state.newToDo.title)
        this.setState({
             newToDo : {
               title: "",
               complete: false,
               id: ""
             }
           })
      }
    }

   remove = (id) => {
     this.props.removeToDo(id);
   }

   complete = (id) => {
     this.props.completeToDo(id);
   }

  render() {
    return (
      <div className="wrapper">
        <h1>To Dos</h1>
        <div className="form">
          <input
            name="title"
            value={this.state.newToDo.title ? this.state.newToDo.title : ""}
            placeholder="Title"
            onChange={this.handleChange}
            />
          <button onClick={() => this.add()}>+</button>
        </div>

        <div className="list">
          <ul>
            {console.log('propssss', this.props)}
            {this.props.toDoList.map(item =>{
              return(
                <Single
                  title = {item.title}
                  completed = {item.completed}
                  id={item.id}
                  key={item.id}
                  completeTask = {this.complete}
                  remove={this.remove}
                />
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    toDoList: state.toDoList,
  }
}

export default connect( mapStateToProps, {getAllToDos, addToDo, removeToDo, completeToDo} )(Home);
