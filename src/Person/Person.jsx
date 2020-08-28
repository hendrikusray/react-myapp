/* eslint-disable */
import classes from './Person.css';
import React from 'react';
// import styled from 'styled-components';


const person = (props) => {
  return(
    <div className={classes.Person}>
      <p onClick={props.click}>
        I&apos;m
        {props.name}
        {' '}
        and I am
        {props.age}
        {' '}
        years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
