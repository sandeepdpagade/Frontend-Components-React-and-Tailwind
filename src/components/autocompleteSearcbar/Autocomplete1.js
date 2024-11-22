

// npm install react-autosuggest



import React, { useState } from "react";

const AutocompleteSearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const items = [
    "React",
    "Tailwind",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
    "TypeScript",
    "Python",
    "Django",
    "Flask",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions
    if (value.length > 0) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="flex-grow px-4 py-2 outline-none rounded-md focus:ring focus:ring-blue-300"
        />
        <button className="px-3 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a7 7 0 1110-10 7 7 0 01-10 10z"
            />
          </svg>
        </button>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearchBar;
