import Autocomplete from './components/Autocomplete';
import './App.css';

function App() {
  return (
    <div className="App">
      <Autocomplete limit={100} />
    </div>
  );
}

export default App;
