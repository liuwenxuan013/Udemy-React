import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) =>
{
    // useEffect(() =>
    // {
    //     console.log('[Cockpit.js] useEffect');
    //     setTimeout(() => { alert('save data to cloud!!') }, 1000);
    //     return () =>
    //     {
    //         console.log('[Cockpit.js] cleaning work in useEffect');
    //     }
    // }, [props.persons]);


    let assignedClass = [];
    let btnClass = '';
    if (props.showPersons)
    {
        btnClass = classes.Red;// red button for person show
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

            <h1>{props.title}</h1>
            <p className={assignedClass.join(' ')}> This is really work!!!</p>

            <button
                className={btnClass}
                onClick={props.clickToggle}

            > Toggle Persons</button>
        </div >
    );
}
export default Cockpit;