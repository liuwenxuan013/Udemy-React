import React from 'react';
import Person from './Person/Person';


class Persons extends React.Component 
{
    static getDerivedStateFormProps(props, state)
    {
        console.log('[Persons.js] getDerivedStateFormProps', [props, state]);
        return state;
    }
    componentDidMount()
    {
        console.log('[Persons.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('[Persons.js] shouldComponentUpdate', [nextProps, nextState]);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('[Persons.js] getSnapshotBeforeUpdate', [prevProps, prevState]);
        return 'the prevProps is: ' + prevProps + '& prevState is: ' + prevState;
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {

        console.log('[Persons.js] componentDidUpdate', [prevProps, prevState, snapshot]);
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
