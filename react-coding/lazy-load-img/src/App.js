import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [pics, setPics] = useState([])

  useEffect(() => {

  },[])
  
  return (
    <div className="App">
      <div className='scrollable'>
        { new Array(50).fill(0).map((el,i) => <img 
            className='image' loading='lazy' 
            src={"https://random.imagecdn.app/500/" + (150+i) }
            width="500" height={200} /> //IMPORTANT - set img dimensions, or lazy load might not work
        )}
      </div>
    </div>
  );
}

export default App;
