export const Contact = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
      <button>Delete</button>
    </li>
  );
};
