import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Theme"
      className="relative p-2.5 rounded-full transition-all duration-300 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 hover:scale-105 shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-500 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-500 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
