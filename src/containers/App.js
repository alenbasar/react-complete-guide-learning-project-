import React, { Component } from "react";
import classes from "../containers/App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        /**persons state is an array of objects with properties, in this case persons with name, age and id(every person has to have unique id) */
        { id: "1", name: "Alen", age: 23 },
        { id: "2", name: "Summer", age: 30 },
        { id: "3", name: "Random", age: 60 },
      ],
      showPersons: false,
      showCockpit: true,
      authenticated: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  changeNameHandler = (event, i) => {
    const personIndex = this.state.persons.findIndex((prs) => {
      return prs.id === i;
    });
    const personID = {
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

  signInHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.changeNameHandler}
          click={this.deletePersonHandler}
          //isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            SignIn: this.signInHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
