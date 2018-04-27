import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToDo, completeToDo, getAllToDos, saveToDo } from '../../redux/properties';

class Detail extends Component {
  constructor (props){
    super(props);
    this.state ={
      updateToDo: {}
    }
  }

  componentDidMount(){
    if (!this.props.toDoList.length){
      this.props.getAllToDos();
    }
  }

   remove = (id) => {
     this.props.removeToDo(id);
     this.props.history.push("/");
   }

   complete = (id) => {
     this.props.completeToDo(id);
     this.props.history.push("/");
   }

   save = (id, update) => {
     this.props.saveToDo(id, update);
     this.props.history.push("/");
   }

   handleChange = (event) => {
       const target = event.target;
       const value = target.value;
       const name = target.name;

       let updateToDo = Object.assign({}, this.state.updateToDo);
       updateToDo[name] = value;

       this.setState({
         updateToDo: updateToDo
       })
     }

  render() {
    const todoId = this.props.match.params.id;
    return(
          <div className="wrapper">

            <Link to="/" >Back to Tasks</Link>
            {this.props.toDoList.map(item =>{
                if (item.id == todoId){
                  return(
                    <div key={item.id}>
                    <div className={item.completed ? 'completed' : ''}>
                      <h1>{item.title}</h1>
                    </div>
                    <form>
                    <input
                      name="title"
                      defaultValue={item.title}
                      placeholder="Title"
                      onChange={this.handleChange}
                      />
                      <br/>

                      <input
                        name="description"
                        defaultValue={item.description ? item.description : "" }
                        placeholder="Description"
                        onChange={this.handleChange}
                        />
                      </form>

                      <br/><br/>
                    <button className="remove"
                      onClick={()=> this.remove(item.id)}>
                      Delete</button>

                    <button disabled={item.completed}
                      onClick={()=> this.complete(item.id)
                      }>
                      Complete</button>


                    <button
                      onClick={()=> this.save(item.id, this.state.updateToDo)
                      }>
                      Save</button>


                    <button
                      onClick={()=> this.props.history.push("/")
                      }>
                      Cancel</button>
                      </div>
                  )}
              })}
          </div>
        )
      }

}


function mapStateToProps (state) {
  return {
    toDoList: state.toDoList,
  }
}

export default connect( mapStateToProps, {removeToDo, completeToDo, getAllToDos, saveToDo})(Detail);
