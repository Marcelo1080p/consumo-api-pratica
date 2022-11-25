import { useState, useEffect } from 'react';
import { personagem } from './api/api';
import './App.css';

function App() {

  const[showCharacter, setShowCharacter] = useState([])
  
  useEffect(() => {
    personagem().then(res => setShowCharacter(res))
    
  },[])

  return (
    <div className="App">
      {showCharacter.map((person) => (
        <div className='container'>
          <p>{person.name}</p>
          <p>{person.status}</p>
          <p>{person.species}</p>
          <p>{person.type}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
