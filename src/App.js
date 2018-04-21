import React, { Component } from 'react';
import './App.css';
import UserInput from './user-input'
import UserOutput from './user-output'


class App extends Component {
  state = {
    userName: 'Super Kev'
  }

  onChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, This is a test project</h1>
        <UserInput userName={this.state.userName} changeHandler={this.onChangeHandler} />
        <UserOutput userName={'Kevin'} />
        <UserOutput userName={'Maria'} />
        <UserOutput userName={'Ollie'} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
