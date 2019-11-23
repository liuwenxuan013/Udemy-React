import React, { Component } from 'react';

import classes from './Person.module.css';
class Person extends Component
{
    static getDerivedStateFormProps(props, state)
    {
        console.log('[Person.js] getDerivedStateFormProps', [props, state]);
        return state;
    }
    componentDidMount()
    {
        console.log('[Person.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('[Person.js] shouldComponentUpdate', [nextProps, nextState]);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('[Person.js] getSnapshotBeforeUpdate', [prevProps, prevState]);
        return 'the prevProps is: ' + prevProps + '& prevState is: ' + prevState;
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {

        console.log('[Person.js] componentDidUpdate', [prevProps, prevState, snapshot]);
        console.log(snapshot);
    }
    componentWillUnmount()
    {
        console.log('[Person.js] componentWillUnmount');
    }
    render()
    {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}> I'm {this.props.name}! and I'm {this.props.age} years old! </p>
                <p> {this.props.children}</p>
                <input style={{ color: "blue" }} type='text' onChange={this.props.changed} value={this.props.name} />



            </div>




        );

    };
}
export default Person;