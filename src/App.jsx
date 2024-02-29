import { useState } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";

const userContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const localStorageContacts = () => {
  const contactsList = localStorage.getItem("contacts");

  return contactsList ? JSON.parse(contactsList) : userContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(localStorageContacts);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
