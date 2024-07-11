import React from 'react';
import './ToggleView.css';

const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

function ToggleView({ selectedView, setSelectedView }) {
  return (
    <div className="toggle-view">
      {views.map((view) => (
        <button
          key={view}
          className={`toggle-button ${selectedView === view ? 'active' : ''}`}
          onClick={() => setSelectedView(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
}

export default ToggleView;