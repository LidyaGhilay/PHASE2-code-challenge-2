import React, { useState } from 'react';

function SortBar({ sortBots, filter }) {
  const [sortBy, setSortBy] = useState('health');
  const [selectedData, setSelectedData] = useState(null);

  const handleSort = (e) => {
    const sort = e.target.value;
    setSortBy(sort);
    sortBots(sort);
  };

  const handleDataFilter = (botData) => {
    setSelectedData(botData);
    filter(botData);
  };

  return (
    <div>
      <select value={sortBy} onChange={handleSort}>
        <option value="health">Sort by Health</option>
        <option value="damage">Sort by Damage</option>
        <option value="armor">Sort by Armor</option>
      </select>
      <div>
        <button onClick={() => filter(null)}>Show All</button>
      </div>
    </div>
  );
}

export default SortBar;
