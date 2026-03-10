import { useState } from "react";

function SearchBar({ onAdd }: { onAdd: (card: string) => void }) {
  const [text, setText] = useState("");

  // handles the submit event lol
  function handleSubmit() {
    onAdd(text);
    setText("");
  }

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* add button */}
      <button className="btn btn-primary" onClick={handleSubmit}>
        Add Card
      </button>
    </div>
  );
}

export default SearchBar;