import { useState } from "react";

export const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="Search contacts by name"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};
