import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends PureComponent {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    const { persons, clicked, changed } = this.props;

    console.log('[Persons.js] rendering...');
    return persons.map((person, index) => (
      <Person
        click={() => clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => changed(event, person.id)}
      />
    ));
  }
}

Persons.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequried, name: PropTypes.string, age: PropTypes.number })).isRequired,
  clicked: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
};

export default Persons;
