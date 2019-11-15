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
    ],
    showPersons: false,

  }
  nameSwitchHandler = (newName) =>
  {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Tim', age: 18 },
        { name: 'Alisa', age: 20 },
      ],
    }


    );
  }
  togglePersonHandler = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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
          onClick={this.togglePersonHandler}
        > Toggle Persons</button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={() => { return this.nameSwitchHandler('hello hello...') }}//way:1

            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.nameSwitchHandler.bind(this, 'superman')}//way:2 bind this 
              changed={this.changeHandler}

            > my hobbies is:painting </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />

          </div> : null
        }

      </div>

    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello, Laura!'));
  };

}

export default App;
