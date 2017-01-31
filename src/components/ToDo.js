import React, { Component } from 'react';
import Button from './Button'

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
    // debugger
    this.props.markComplete(this.props.id)

      // this.state.complete = true
      // debugger
      // this.setState({
      //   complete: true,
      // })

      // console.log(this.state)
  }

  render (){

    return(
      <li>
        <div>
         {this.props.item}
        </div>
        <Button handleComplete={this.handleComplete.bind(this)}
          complete={this.props.complete} />
      </li>
    );
  }
}

export default ToDo;
