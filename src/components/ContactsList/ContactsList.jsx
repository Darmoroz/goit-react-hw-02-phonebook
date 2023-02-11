import PropTypes from 'prop-types';

import { Contact } from './Contact';
import { Contacts } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          />
        );
      })}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func,
};
