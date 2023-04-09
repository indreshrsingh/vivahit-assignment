import './App.css';
import Title from './components/Title';
import Games from './components/Games';
import GameState from './context/games/GameState';
import FilterForm from './components/Filter';
import Search from './components/Search';


function App() {
  return (
    <>
    <GameState>
      <Title />
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <Search/>
      <FilterForm/>
      </div>
      <Games/>
    </GameState>
    </>
  );
}

export default App;
