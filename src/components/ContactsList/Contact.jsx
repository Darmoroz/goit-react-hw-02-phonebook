import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
