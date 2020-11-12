import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  let btnClass = [classes.Button];
  let c = "";
  let assignedClasses = [];
  if (props.showPersons) {
    btnClass.push(classes.Red);
    c = props.persons.length;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
    c = "2";
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.red);
    c = "1";
  }
  if (props.persons.length === 0) {
    assignedClasses.push(classes.bold);
    c = "0";
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>{c}</p>
      <button className={btnClass.join("")} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
