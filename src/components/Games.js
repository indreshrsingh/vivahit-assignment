import {React,useContext} from "react";
import GameContext from "../context/games/gameContext";
import GameItem from "./GameItem";


const Games = () => {

const context = useContext(GameContext);
const {games,setGames} = context;

return(


<div className="row my-3">
  {(games).map((game) => {
    return <GameItem game={game}/>

  })
}
</div>



)

}
export default Games;