import React from 'react';
import classes from './Cockpit.module.css';


class Cockpit extends React.Component
{
    static getDerivedStateFormProps(props, state)
    {
        console.log('[Cockpit.js]  getDerivedStateFormProps]', [props, state]);
        return state;
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('[Cockpit.js]  shouldComponentUpdate', [nextProps, nextState]);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('[Cockpit.js]  getSnapshotBeforeUpdate', [prevProps, prevState]);
        return 'the prevProps is: ' + prevProps + '& prevState is: ' + prevState;

    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log('[Cockpit.js]  componentDidUpdate', [prevProps, prevState, snapshot]);
        console.log(snapshot);
    }
    componentDidMount()
    {
        console.log('[Cockpit.js] componentDidMount');

    }
    componentWillUnmount()
    {
        console.log('[Cockpit.js] componentWillUnmount');
    }
    render()
    {
        console.log('[Cockpit.js]  rendering...');
        let assignedClass = [];
        let btnClass = '';
        if (this.props.showPersons)
        {
            btnClass = classes.Red;// red button for person show
        }

        if (this.props.persons.length <= 2)
        {
            assignedClass.push(classes.red); //classes = ['red']
        }
        if (this.props.persons.length <= 1)
        {
            assignedClass.push(classes.bold);//classes=['red','bold']
        }

        return (

            <div className={classes.Cockpit}>

                <h1>{this.props.title}</h1>
                <p className={assignedClass.join(' ')}> This is really work!!!</p>

                <button
                    className={btnClass}
                    onClick={this.props.clickToggle}

                > Toggle Persons</button>
            </div >
        );

    }
    // useEffect(() =>
    // {
    //     console.log('[Cockpit.js] useEffect');
    //     setTimeout(() => { alert('persons component changed!!') }, 1000);
    //     return () =>
    //     {
    //         console.log('[Cockpit.js] cleaning work in [this.props.persons] useEffect');
    //     }
    // }, [this.props.persons]);

    // useEffect(() =>
    // {
    //     console.log('[Cockpit.js] 2nd useEffect');
    //     setTimeout(() => { alert('empty array as condition of firing useEffect!') }, 1000);
    //     return () =>
    //     {
    //         console.log('[Cockpit.js] cleaning work in [] useEffect');
    //     }
    // }, []);

    // useEffect(() =>
    // {
    //     console.log('[Cockpit.js] 3nd useEffect');
    //     setTimeout(() => { alert('run all the time!') }, 1000);
    //     return () =>
    //     {
    //         console.log('[Cockpit.js] cleaning all the time with each render');
    //     }
    // });




}
export default Cockpit;