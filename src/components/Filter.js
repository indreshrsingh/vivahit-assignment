import React, { useState, useContext } from 'react';
import GameContext from '../context/games/gameContext';

const FilterForm = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const game = useContext(GameContext); 

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    game.handleFilter(event.target.value);
  };

  const platforms = [["PC","pc"], ["Browser","browser"]];

  return (
    <div style={{textAlign: 'right', marginRight: '10px' }}>
      <label htmlFor="platform" style={{color:'white'}}>Filter by platform:</label>
      <select id="platform" value={selectedPlatform } onChange={handlePlatformChange} style={{backgroundColor:'black',color:'white'}}>
        <option value="all" style={{color:'white'}}>All platforms</option>
        {platforms.map((platform) => (
          <option key={platform[1]} value={platform[1]} style={{color:'white'}}>
            {platform[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterForm;

