import React, { useState, useEffect ,useContext} from "react";

import  GameContext  from "../context/games/gameContext";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

const newgame = useContext(GameContext);


const handleChange = (event) => {
  setSearchTerm(event.target.value);
};
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  
  const results = newgame.intilalgames.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  newgame.setGames(results);
}, [searchTerm]);

return (
  <div>
    <input 
    className="filter mx-2"
      type="text"
      placeholder="Search games by title"
      defaultValue={searchTerm || ""}
      value={searchTerm}
      onChange={handleChange}
      style={{color:'white',backgroundColor:'black',borderColor:'grey' }}

    />
  </div>
);

  
};

export default Search;
