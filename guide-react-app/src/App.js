import React from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';
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
  changeHandler = (event, id) =>
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer ',

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
              key={person.id}
              changed={(event) => this.changeHandler(event, person.id)}
            />
          })}

        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2)
    {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1)
    {
      classes.push('bold');//classes=['red','bold']
    }


    return (
      <div className="App">
        <h1>Hi, I'm Laura</h1>
        <p className={classes.join(' ')}> This is really work!!!</p>

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
