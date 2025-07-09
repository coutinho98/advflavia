import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        disabled={isTransitioning}
        className={`
          relative group flex items-center justify-center
          w-14 h-8 rounded-full transition-all duration-400 ease-in-out
          ${theme === 'light' 
            ? 'bg-gradient-to-r from-amber-200 to-yellow-300 shadow-lg shadow-amber-200/50' 
            : 'bg-gradient-to-r from-slate-700 to-slate-800 shadow-lg shadow-slate-800/50'
          }
          hover:scale-105 hover:shadow-xl
          focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800
          disabled:opacity-70 disabled:cursor-not-allowed
          border-2 ${theme === 'light' ? 'border-amber-300' : 'border-slate-600'}
        `}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className={`
          absolute inset-0 rounded-full transition-opacity duration-400
          ${theme === 'light' 
            ? 'bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-30' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20'
          }
        `} />
        <div className={`
          absolute w-6 h-6 rounded-full transition-all duration-400 ease-in-out
          flex items-center justify-center
          ${theme === 'light'
            ? 'left-1 bg-white shadow-md transform group-hover:scale-110'
            : 'left-7 bg-slate-200 shadow-md transform group-hover:scale-110'
          }
          ${isTransitioning ? 'animate-pulse' : ''}
        `}>
          {theme === 'light' ? (
            <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 group-hover:-rotate-12" />
          )}
        </div>
        {theme === 'dark' && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-2 right-4 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        )}
      </button>
      <div className={`
        absolute -bottom-8 left-1/2 transform -translate-x-1/2
        px-2 py-1 text-xs font-medium rounded-md
        bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        pointer-events-none whitespace-nowrap
      `}>
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
      </div>
    </div>
  );
};

export default ThemeToggle;