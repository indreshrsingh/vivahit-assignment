import gameContext from "./gameContext";
import { useState ,useEffect} from "react";



const GameState = (props) => {
  const gamesdefault=[
    {
      id:'1',
      title: "World of Warcraft"
    }
    ]
  const [games, setGames] = useState(gamesdefault);
  const [platforms, setPlatforms] = useState("all");
  const [intilalgames, setInitilalgames] = useState(gamesdefault);
  
  const handleFilter=(selectedPlatform)=>{
    setPlatforms(selectedPlatform);
    
  }
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fc0b196cd0msh3fd2c575713a2b9p106c97jsne05e2c5e0072',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
    async function fetchGames() {
      const data =await fetch(`https://mmo-games.p.rapidapi.com/games?platform=${platforms}`, options)
      const gamedata=await data.json();
	    setGames(gamedata);
      setInitilalgames(gamedata);
      console.log(gamedata);
  }
  
  fetchGames();
    
  }, [platforms]);
  
   
  return <gameContext.Provider value={{games,setGames,handleFilter,intilalgames,setInitilalgames}}>{props.children}</gameContext.Provider>;
};

export default GameState;
