import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactItemStyled';
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete contact
          </Button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
