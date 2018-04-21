import React, { Component } from 'react';
import './App.css';
import UserInput from './user-input'
import UserOutput from './user-output'


class App extends Component {
  state = {
    userName: 'Jack',
    userNames: [
      'Super Kevin',
      'Maria',
      'Ollie'
    ],
    showUsers: false
  }

  onChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showUsers
    this.setState({showUsers: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    console.log('hello')
    const users = [...this.state.userNames]
    users.splice(personIndex, 1);
    this.setState({userNames: users})
  }

  render() {
    const { showUsers } = this.state;
    const buttonStyle = {
      backgroundColor: 'beige',
      border: '1px solid black',
      boxShadow: '0 1px 3px #ccc',
      font: 'inherit',
      padding: '8px',
      margin: '10px',
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

        { showUsers &&
          <div>
            <UserOutput userName={this.state.userName} />
            {
            this.state.userNames.map((user, index) =>
            <UserOutput
              deleteClick={() => this.deletePersonHandler(index)}
              userName={user} />
            )}
          </div>
        }
      </div>
    );
  }
}

export default App;
