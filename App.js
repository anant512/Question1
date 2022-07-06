
import { useState } from 'react';
import './App.css';
import Box1 from './components/Box1.component';
import Box2 from './components/Box2.component';

function App() {
  const [box,setBox]=useState(true)


   
  return (
    <div className="App">
      {
        box===true ? <Box1/> : <Box2/>
      }
     <button className='button' value={box}  onClick={_ => setBox(!box)}>Toggle Box</button>
    </div>
  );
}

export default App;
