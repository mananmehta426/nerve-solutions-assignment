import React from 'react';
import './StrategyCards.css';

function StrategyCards({ selectedView, selectedDate, strategyArray }) {
  const getStrategiesForViewAndDate = () => {
    const viewData = strategyArray.find((item) => item.View === selectedView);
    return viewData && viewData.Value[selectedDate] ? viewData.Value[selectedDate] : [];
  };

  const strategies = getStrategiesForViewAndDate();
  
  const strategyCount = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  if (Object.keys(strategyCount).length === 0) {
    return <EmptyState date={selectedDate} />;
  }

  return (
    <div className="strategy-cards">
      {Object.entries(strategyCount).map(([strategy, count]) => (
        <div key={strategy} className="strategy-card">
          <span className="strategy-name">{strategy}</span>
          <span className="strategy-count">{count} {count === 1 ? 'Strategy' : 'Strategies'}</span>
        </div>
      ))}
    </div>
  );
}

function EmptyState({ date }) {
  return (
    <div className="empty-state">
      <p>There are no strategies for</p>
      {date}
    </div>
  );
}

export default StrategyCards;