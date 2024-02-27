export const Contact = ({ contacts: { name, number } }) => {
  return (
    <li>
      {name}: {number}
      <button>Delete</button>
    </li>
  );
};
