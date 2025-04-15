import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        
        {/* Project Credit */}
        <p className="text-center sm:text-left mb-2 sm:mb-0">
          Made with ❤️ by <span className="text-primary-600 dark:text-primary-400 font-medium">W</span>
        </p>
        
        {/* Internal Links */}
        <div className="flex gap-4">
          <a href = 'https://github.com/prana-W/React.js_Lecture_Notes/tree/master/Self-Projects/Task%20Manager'
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            target='_blank'
          >
            GitHub Repo
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
