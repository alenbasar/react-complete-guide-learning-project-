import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  let btnClass = [classes.Button];
  let c = "";
  let assignedClasses = [];
  if (props.showPersons) {
    btnClass.push(classes.Red);
    c = props.personsLength;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
    c = "2";
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.red);
    c = "1";
  }
  if (props.personsLength === 0) {
    assignedClasses.push(classes.bold);
    c = "0";
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>{c}</p>
      <button
        ref={toggleBtnRef}
        className={btnClass.join("")}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.SignIn}>Sign In</button>
    </div>
  );
};

export default React.memo(Cockpit);
