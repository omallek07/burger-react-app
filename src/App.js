import React, { Component } from 'react';
import './App.css';
import UserInput from './user-input'
import UserOutput from './user-output'


class App extends Component {
  state = {
    userName: 'Jack',
    userNames: [
      { id: '3we', name: 'Super Kevin' },
      { id: '32r', name: 'Maria' },
      { id: '4r3', name: 'Ollie' }
    ],
    showUsers: false
  }

  onChangeHandler = (event) => {
    this.setState({userName: event.target.value});
  }

  nameChangedHandler = ( event, id ) => {
    const userIndex = this.state.userNames.findIndex(user => user.id === id);
    const updatedUserName = {
      ...this.state.userNames[userIndex]
    };

    updatedUserName.name = event.target.value;

    const users = [...this.state.userNames];
    users[userIndex] = updatedUserName

    this.setState({ userNames: users })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({showUsers: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const users = [...this.state.userNames];
    users.splice(personIndex, 1);
    this.setState({userNames: users});
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
              key={user.id}
              deleteClick={() => this.deletePersonHandler(index)}
              userName={user.name}
              nameChange={(evt) => this.nameChangedHandler(evt, user.id)} />
            )}
          </div>
        }
      </div>
    );
  }
}

export default App;
