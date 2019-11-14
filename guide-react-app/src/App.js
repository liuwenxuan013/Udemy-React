import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends React.Component
{
  state = {
    persons: [
      { name: 'Laura', age: 28 },
      { name: 'Tim', age: 18 },
      { name: 'Alisa', age: 20 },
    ]

  }
  switchNameHandler = (newName) =>
  {
    //console.log('was clicked');
    //this.state.persons[0].name = 'wenxuan';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Tim', age: 18 },
        { name: 'Alisa', age: 20 },
      ]
    })
  }
  changeHandler = (event) =>
  {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Tim', age: 18 },
        { name: 'Alisa', age: 20 },
      ]
    })

  }

  render()
  {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }
    return (
      <div className="App">
        <h1>hi, laura</h1>
        <p>Anothor heading</p>

        <button
          style={style}
          onClick={() => this.switchNameHandler('world')}  //way:2 bind this 
        > Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => { return this.switchNameHandler('hello hello...') }}//way:1

        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'superman')}//way:2 bind this 
          changed={this.changeHandler}

        > my hobbies is:painting </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>

    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello, Laura!'));
  };

}

export default App;
