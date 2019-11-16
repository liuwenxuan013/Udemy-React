import React from 'react';
import './Cockpit.css';
import classes from './Cockpit.css';

const cockpit = (props) =>
{
    let assignedClass = [];
    let btnClass = '';
    if (props.showPerson)
    {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2)
    {
        assignedClass.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1)
    {
        assignedClass.push(classes.bold);//classes=['red','bold']
    }

    return (
        <div className={classes.Cockpit}>

            <h1>Hi, I'm Laura</h1>
            <p className={assignedClass.join(' ')}> This is really work!!!</p>

            <button
                className={btnClass}
                onClick={props.clickToggle}

            > Toggle Persons</button>



        </div >
    );
}
export default cockpit;