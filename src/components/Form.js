import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        
        <h1>My To Do List</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input value={this.props.text} onChange={this.props.handleChange} type='text'></input>
          <button>add</button>
        </form>
      </div>
    );
  }
}

export default Form;
