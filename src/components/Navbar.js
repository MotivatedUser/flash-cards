import React from 'react';
import '../../src/App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Frontend Interview Flashcards</h1>
        <p>by Doug Altermatt</p>
        <p>
          Find more projects at&nbsp;
          <a
            className="link"
            aria-label="Visit ReactiveDoug.com for more projects"
            title="Visit ReactiveDoug.com for more projects"
            href="https://www.reactivedoug.com"
          >
            ReactiveDoug.com
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
