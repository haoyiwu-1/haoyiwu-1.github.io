import React, { useState } from 'react';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleSelection = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div className='relative'>
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedOption || 'Projects'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)} className="dropdown-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown;