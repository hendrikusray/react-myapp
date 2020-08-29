import React from 'react';
import PropTypes from 'prop-types';
import classes from './Cockpit.css';
// import persons from '../Persons/Persons';

const cockpit = (props) => {
  const { showPersons, persons, clicked } = props;

  const assignedClasses = [];
  let btnClass = '';

  if (showPersons) {
    btnClass = classes.Red;
  }

  if (persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I&apos;m a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button type="button" className={btnClass} onClick={clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

cockpit.propTypes = {
  showPersons: PropTypes.bool.isRequired,
  persons: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequried, name: PropTypes.string, age: PropTypes.number })).isRequired,
  clicked: PropTypes.func.isRequired,
};

export default cockpit;
