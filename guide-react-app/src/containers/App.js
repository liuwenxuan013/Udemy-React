import React from 'react';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor...');
  }
  state = {
    persons: [
      { id: '01', name: 'Laura', age: 28 },
      { id: '02', name: 'Tim', age: 18 },
      { id: '03', name: 'Alisa', age: 20 },
    ],
    showPersons: false,
    showCockpit: true,

  }

  static getDerivedStateFormProps(props, state)
  {
    console.log('[App.js] getDerivedStateFormProps]', props);
    return state;
  }
  // componentWillMount()
  // {
  //   console.log('[App.js] componentWillMount');
  // }
  componentDidMount()
  {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[App.js] shouldComponentUpdate', nextProps);
    return true;
  }


  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate');
  }
  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return prevProps;
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
    console.log('[App.js] rendering...');
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
        <button onClick={() =>
        {
          this.setState({ showCockpit: false });
        }
        }>Remove Cockpit</button>
        {this.state.showCockpit ?
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clickToggle={this.togglePersonHandler}
            showCockpit
          /> : null}
        {persons}

      </div >

    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello, Laura!'));
  };

};

export default App;
