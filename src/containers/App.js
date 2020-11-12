import React, { Component } from "react";
import classes from "../containers/App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  // in older script versions this used to be a class that used extend to inherit from Component class that was imported from react library

  state = {
    /** These are our states, here we have persons and showPersons states. */
    persons: [
      /**persons state is an array of objects with properties, in this case persons with name, age and id(every person has to have unique id) */
      { id: "1", name: "Alen", age: 23 },
      { id: "2", name: "Summer", age: 30 },
      { id: "3", name: "Random", age: 60 },
    ],
    showPersons: false /** This is our showPersons state that is boolean(false by default) because we use it conditionally(when we press the button it becomes true) */,
  };

  changeNameHandler = (event, i) => {
    /** This is an event handler that receives event and id props */
    const personIndex = this.state.persons.findIndex((prs) => {
      /** Here we declare personsIndex to which we assign the ids of each element in a persons array, using findIndex()*/
      return (
        prs.id === i
      ); /** findIndex() method executes the function which receives prs as prop, for each element in the array, returning the value that we want to find.*/
    }); /** We basically ask if prs.id is strictly equal(===) to id in persons state, if it is the id is returned and copied to personsIndex which becomes a copy of each persons id.*/

    const personID = {
      /** Here we make a copy of persons state by using spread operator(...this.state.persons[personIndex]) */
      ...this.state.persons[personIndex],
    };

    personID.name = event.target.value;

    const personsCopy = [...this.state.persons];

    personsCopy[personIndex] = personID;

    this.setState({
      persons: personsCopy,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const dPersons = [...this.state.persons];
    dPersons.splice(personIndex, 1);
    this.setState({ persons: dPersons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.changeNameHandler}
          click={this.deletePersonHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div> // This might look like HTML and also can be referred to as HTML but it is not, it's called JSX which is Reacts version of HTML that gets compiled into JS.
    );
    /*return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m a React App')); this is the equivalent to the code above,
                                                                                                               we can see how much more efficient and cleaner
                                                                                                               the code above looks, thats why we use React js.*/
  }
}

export default App;
