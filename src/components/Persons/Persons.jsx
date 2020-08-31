import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends Component {
  static getDrivedStateFromProps(props, state) {
    console.log('[Persons.js] getDrivedStateFromProps');
    return state;
  }

  render() {
    const { persons, clicked, change } = this.props;
    return persons.map((person, index) => (
      <Person
        click={() => clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => change(event, person.id)}
      />
    ));
  }
}

Persons.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequried, name: PropTypes.string, age: PropTypes.number })).isRequired,
  clicked: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

export default Persons;
