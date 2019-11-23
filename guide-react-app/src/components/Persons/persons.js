import React from 'react';
import Person from './Person/Person';


const persons = (props) =>
{
    console.log('[Persons.js] rendering...');

    return props.persons.map((person, index) =>
    {

        return <Person
            click={() => props.clickDelete(index)}
            name={person.name}
            key={person.id}
            age={person.age}
            changed={(event) => props.changeName(event, person.id)}
        />
    });
}

export default persons;
