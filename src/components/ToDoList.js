import React, { Component } from 'react';
import ToDo from './ToDo'
import Form from './Form'


class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      text: '',
    }
  }

  handleChange(ev){
    this.setState({text: ev.target.value})
  }

  handleSubmit(ev){
    ev.preventDefault()
    if(this.state.text === ''){
      return;
    }

    let newItem = [{
      id: Date.now(),
      text: this.state.text,
      isCompleted: false,
      },
      ...this.state.todos
    ];

    // let itemArray = this.state.todos
    // itemArray.push({
    //   id: Date.now(),
    //   text: this.state.text,
    //   isCompleted: false,
    // })

    this.setState({
      todos: newItem,
      text: '',
    })
  }

  markComplete(id){

    var newArray = this.state.todos.map((item) => {
      if(item.id === id){
        item.isCompleted = true
      }
      return item
    })

    this.setState({
        // todos: [
        //   clickedItem,
        //   ...this.state.todos
        // ],
        // text: ''
        todos: newArray,
        text: '',
    })
  }

  render() {
    const toDo = this.state.todos.map( todo => {
      return <ToDo
        key={todo.id}
        id={todo.id}
        item={todo.text}
        complete={todo.isCompleted}
        markComplete={this.markComplete.bind(this)}
      />
      })
    return (

      <div className='ToDoList'>
        <Form
          text={this.state.text}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
        <div className='ToDos'>
          <ul>
            {toDo}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoList;
