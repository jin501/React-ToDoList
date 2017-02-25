import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class Form extends Component {
  render() {
    return (
      <div className="form">

        <h1>My To Do List</h1>
        <form onSubmit={this.props.handleSubmit}>
          <Input value={this.props.text} onChange={this.props.handleChange} type='text'></Input>
          <Button inverted color='violet'>add</Button>
        </form>
      </div>
    );
  }
}

export default Form;
