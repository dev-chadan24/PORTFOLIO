import React from 'react';

function Header({ darkMode, toggleDark }) {
  return (
    <header className="header">
      <div className="flex items-center gap-3">
        <div className="relative flex h-2.5 w-2.5">
          <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </div>
        <span className="font-semibold text-white tracking-tight">Chandan Mahapatra</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleDark}
          className="p-2.5 rounded-full bg-gray-800/60 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a href="mailto:cmahapatra2400@gmail.com" className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-500 transition-colors">
          Let's Connect
        </a>
      </div>
    </header>
  );
}

export default Header;
