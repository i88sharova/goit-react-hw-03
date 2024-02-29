export const Contact = ({ contacts, onDeleteContact }) => {
  return (
    <li>
      <p>
        {contacts.name}: {contacts.number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};
