import React, { Component } from 'react';
import './App.css';
import UserInput from './user-input'
import UserOutput from './user-output'
import InputValidation from './validation-input-length'
import CharComponent from './char-component'

class App extends Component {
  state = {
    userName: 'Jack',
    userNames: [
      { id: '3we', name: 'Super Kevin' },
      { id: '32r', name: 'Maria' },
      { id: '4r3', name: 'Ollie' }
    ],
    showUsers: false,
    validateStr: ''
  }

  validateStrHandler = (evt) => {
    this.setState({validateStr: evt.target.value})
  }

  onChangeHandler = (event) => {
    this.setState({userName: event.target.value});
  }

  deleteCharHandler = (index) => {
    const newStr = this.state.validateStr.split('');
    newStr.splice(index, 1)
    const updatedText = newStr.join('')
    this.setState({validateStr: updatedText})
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
    const charList = [...this.state.validateStr].map((char, index) => {
      return <CharComponent
      key={index}
      char={char}
      removeChar={() => this.deleteCharHandler(index)} />
    })

    const buttonStyle = {
      backgroundColor: 'beige',
      border: '1px solid black',
      boxShadow: '0 1px 3px #ccc',
      font: 'inherit',
      padding: '8px',
      margin: '10px',
      cursor: 'pointer'
    }
    const inputStyle = {
      backgroundColor: 'beige',
      border: '1px solid black',
      boxShadow: '0 1px 3px #ccc',
      margin: '10px'
    }

    return (
      <div className="App">
        <h1>Hi, This is a test project</h1>

        <UserInput userName={this.state.userName} changeHandler={this.onChangeHandler} />
        <div>
          Validate this string:
          <input style={inputStyle} type='text' onChange={this.validateStrHandler} value={this.state.validateStr} />
        </div>
        <InputValidation str={this.state.validateStr} />

        {charList}

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
