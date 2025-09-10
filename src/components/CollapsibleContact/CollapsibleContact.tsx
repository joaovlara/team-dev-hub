"use client";
import { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";

interface CollapsibleContactProps {
  contacts: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const CollapsibleContact: React.FC<CollapsibleContactProps> = ({ contacts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-2 text-lg font-semibold text-white"
      >
        <span className='card-title'>Contato</span>
        <GoTriangleDown size={24}
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="py-2 flex justify-between">
          {contacts.github && (
            <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="link-contato">
              GitHub
            </a>
          )}
          {contacts.linkedin && (
            <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="link-contato">
              LinkedIn
            </a>
          )}
          {contacts.email && (
            <a href={`mailto:${contacts.email}`} className="link-contato">
              Email
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CollapsibleContact;
