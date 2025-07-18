import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-center py-4 mt-8">
    <div className="mb-2">
      <a
        href="https://github.com/Techgenius001"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline mx-2"
      >
        GitHub
      </a>
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline mx-2"
      >
        Vercel
      </a>
      <a
        href="https://netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline mx-2"
      >
        Netlify
      </a>
    </div>
    <div>&copy; {new Date().getFullYear()} Task App. All rights reserved.</div>
  </footer>
);

export default Footer;
