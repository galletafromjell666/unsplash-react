import React, { useState } from "react";

const SearchBar = ({ currentTerm, onChange }) => {
  const [usrInput, setUsrInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usrInput !== "" || usrInput === currentTerm) {
      console.log("submited");
      onChange(usrInput);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={usrInput}
            onChange={(e) => setUsrInput(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
