import { Contact } from "../Contact/Contact";
import { nanoid } from "nanoid";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={nanoid()}>
          <Contact contacts={contact} onDelete={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};
