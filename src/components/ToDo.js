import React, { Component } from 'react';
import CheckComplete from './CheckComplete'

class ToDo extends Component {
  constructor(props){
    super(props);

    this.state =
    {
      text: this.props.item,
      complete: this.props.complete,
    }

    // this.handleComplete = this.handleComplete.bind(this)
  }

  handleComplete(ev){
    ev.preventDefault()
    
    let id = "item-" + this.props.id
    document.getElementById(id).className = "completed";
    this.props.markComplete(this.props.id)

  }

  dynamicClass() {
     return "item-" + this.props.id
  }

  render (){

    return(
      <li className="ToDos">
          <CheckComplete handleComplete={this.handleComplete.bind(this)}
            complete={this.props.complete} />
          <div id={this.dynamicClass()}>
            {this.props.item}t
          </div>

      </li>
    );
  }
}

export default ToDo;
