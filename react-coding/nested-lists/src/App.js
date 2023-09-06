import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox'

function App() {
  return (
    <div className="App">
      <Checkbox text='root 1'>
        <Checkbox text='level 1.1'/>
        <Checkbox text='level 1.2'>
          <Checkbox text='level 1.2.1'>
            <Checkbox text='level 1.2.1.1'/>
          </Checkbox>
        </Checkbox>
      </Checkbox>
      <Checkbox text='root 2'/>
    </div>
  );
}

export default App;
