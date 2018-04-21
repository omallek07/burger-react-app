import React, { Component } from 'react';
import './App.css';
import UserInput from './user-input'
import UserOutput from './user-output'


class App extends Component {
  state = {
    userName: 'Super Kev',
    showUsers: false
  }

  onChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showUsers
    this.setState({showUsers: !doesShow})
  }

  render() {
    const { showUsers } = this.state;
    const buttonStyle = {
      backgroundColor: 'beige',
      border: '1px solid black',
      boxShadow: '0 1px 3px #ccc',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, This is a test project</h1>
        <UserInput userName={this.state.userName} changeHandler={this.onChangeHandler} />
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>
          Click to toggle visibility
        </button>
        { showUsers ?
          <div>
            <UserOutput userName={'Kevin'} />
            <UserOutput userName={'Maria'} />
            <UserOutput userName={'Ollie'} />
            <UserOutput userName={this.state.userName} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
