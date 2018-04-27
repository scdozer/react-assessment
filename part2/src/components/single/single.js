import React, { Component } from 'react';
import { connect } from 'react-redux';
import './single.css';

class Single extends Component {
  render() {
    return(
      <li key={this.props.id}>
          <div className={this.props.completed ? 'completed' : ''}>
            {this.props.title}
          </div>

          <button className="remove"
            onClick={()=> this.props.remove(this.props.id)}>
            Remove</button>

          <button disabled={this.props.completed}
            onClick={()=> this.props.completeTask(this.props.id)}>
            Complete</button>
      </li>
    )
  }


}


function mapStateToProps (state) {
  return {
    toDoList: state.toDoList,
  }
}

export default connect( mapStateToProps)(Single);
