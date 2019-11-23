import React from 'react';
import Person from './Person/Person';


class Persons extends React.Component 
{
    static getDerivedStateFormProps(props, state)
    {
        console.log('[Persons.js] getDerivedStateFormProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(preProps, preState)
    {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' }
    }
    componentDidUpdate(preProps, preState, snapshot)
    {

        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    componentWillUnmount()
    {
        console.log('[Persons.js] componentWillUnmount');
    }
    render()
    {
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person, index) =>
        {

            return <Person
                click={() => this.props.clickDelete(index)}
                name={person.name}
                key={person.id}
                age={person.age}
                changed={(event) => this.props.changeName(event, person.id)}
            />
        });
    }
}

export default Persons;
