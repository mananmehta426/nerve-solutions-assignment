import React, { useState } from 'react';
import './DateSelector.css';

function DateSelector({ dates, selectedDate, setSelectedDate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={`date-selector ${isOpen ? 'open' : ''}`}>
        <div className="date-display" onClick={() => setIsOpen(!isOpen)}>
          <span>{selectedDate}</span>
          <span className="arrow"></span>
        </div>
      </div>
      {isOpen && (
        <div className="date-options-container">
          {dates.map((date) => (
            <div
              key={date}
              className="date-option"
              onClick={() => {
                setSelectedDate(date);
                setIsOpen(false);
              }}
            >
              {date}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DateSelector;
