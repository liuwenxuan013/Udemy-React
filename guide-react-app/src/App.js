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
  deletePersonHandler = (personIndex) =>
  {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

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
    let persons = null;
    if (this.state.showPersons)
    {
      persons = (

        <div>
          {this.state.persons.map((person, index) =>
          {
            return <Person
              name={person.name}
              age={person.age}
              click={() => { this.deletePersonHandler(index) }}
            />
          })}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>hi, laura</h1>
        <p>Anothor heading</p>

        <button
          style={style}
          onClick={this.togglePersonHandler}
        > Toggle Persons</button>
        {persons}

      </div>

    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello, Laura!'));
  };

}

export default App;
