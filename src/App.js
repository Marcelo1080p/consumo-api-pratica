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
      <div className='containerPersonagens'>
          {showCharacter.map((person) => (
            <div className='box'>
              <span></span>
              <section>
              <img src={person.image} alt={`Personagem ${person.name}`}/>
              <div className='details'>
              <p>{person.name}</p>
              <p>{person.status}</p>
              <p>{person.species}</p>
              <p>{person.type}</p>
              </div>
              </section>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default App;
