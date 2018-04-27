import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './single.css';

class Single extends Component {
  render() {
    return(
      <li key={this.props.id}>
          <div className={this.props.completed ? 'completed' : ''}>
            <Link to = {`/detail/${this.props.id}`}>
              <h2>{this.props.title}</h2>
            </Link>
          </div>

          <button disabled={this.props.completed}
            onClick={()=> this.props.completeTask(this.props.id)}>
            Complete</button>

            <Link to = {`/detail/${this.props.id}`}>
              Edit
            </Link>
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
