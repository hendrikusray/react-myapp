import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  const {
    showPersons, personsLength, title, clicked,
  } = props;
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (showPersons) {
    btnClass = classes.Red;
  }

  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button type="button" ref={toggleBtnRef} className={btnClass} onClick={clicked}>
        Toggle Persons
      </button>
      <button type="button" onClick={authContext.login}>Log in</button>
    </div>
  );
};

Cockpit.propTypes = {
  showPersons: PropTypes.bool.isRequired,
  personsLength: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(Cockpit);
