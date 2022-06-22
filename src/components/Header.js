import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <div className="credit">
        Create With ❤️{" "}
        <a href="https://www.github.com/sandecodes" target="_blank" rel="noopener noreferrer">
          sandecodes
        </a>
      </div>
    </div>
  );
};

export default Header;
