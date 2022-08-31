import './App.css';
import main from './main.jpg';
import { List } from './List';

function App() {
  return (
    <div className="app">
      <div className='content'>
        <img src = {main} width="300px" alt="list"/>
      </div>
      <div className='content'>
        <h1>Мой список</h1>
      </div> 
      <List />
    </div>
  );
}

export default App;
