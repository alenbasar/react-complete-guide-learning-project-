import React from "react";
import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 600px) {
    width: 300px;
  }
`;

const Person = (props) => {
  console.log("[Person.js] rendering...");
  /*     const rnd = Math.random();
    if(rnd > 0.7){
        throw new Error('something went horribly wrong');
    } */
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        maxLength="10"
      />
    </StyledDiv>
  );
};

export default Person;
