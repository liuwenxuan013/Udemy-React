import React, { Component } from 'react';

import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends React.Component
{
  state = {
    persons: [
      { id: '01', name: 'Laura', age: 28 },
      { id: '02', name: 'Tim', age: 18 },
      { id: '03', name: 'Alisa', age: 20 },
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
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }
  togglePersonHandler = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  changeNameHandler = (event, id) =>
  {
    const personIndex = this.state.persons.findIndex(p =>
    {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;
    this.setState({ persons: newPersons });

  }
  render()
  {
    let persons = null;

    if (this.state.showPersons)

      persons =
        <Persons
          persons={this.state.persons}
          clickDelete={this.deletePersonHandler}
          changeName={this.changeNameHandler}

        />


    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clickToggle={this.togglePersonHandler}
        />
        {persons}

      </div >

    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello, Laura!'));
  };

};

export default App;
