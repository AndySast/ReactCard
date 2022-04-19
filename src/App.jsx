import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import characters from './assets/data.json'

function App() {
  return (
    <div className="App">
      { 
      <div className="showcase">
        {
          characters.map((characters, id) => (<Card key={id} character = {characters}/>))
        }
      </div>}
    </div>
  );
}
export default App;