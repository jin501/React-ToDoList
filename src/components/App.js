import React, { Component } from 'react';
import ToDoList from './ToDoList'
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Container fluid className='main-container'>
          <ToDoList />
        </Container>
      </div>
    );
  }
}

export default App;
