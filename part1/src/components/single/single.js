import React, { Component } from 'react';
import axios from 'axios';
import './single.css';

class Single extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <li key={this.props.id}>
          <div className={this.props.completed ? 'completed' : ''}>
            {this.props.title}
          </div>
          <button className="remove" onClick={()=> this.props.remove(this.props.id)}>Remove</button>
          <button disabled={this.props.completed} onClick={()=> this.props.completeTask(this.props.id)}>Complete</button>
      </li>
    )
  }


}


export default Single;
