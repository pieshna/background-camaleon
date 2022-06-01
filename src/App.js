import './App.css';
import colores from './colores'
import { useState } from 'react';

function App() {
  const [nuevo,setNuevo]=useState(1565);
  return (
    <div style={{background: '#'+colores[nuevo][0]}} className="App">
      <div className="contenedor">
      <h1>{colores[nuevo][1]}</h1>
      
      <button className="btn" onClick={() =>{setNuevo(Math.floor(Math.random() * (colores.length)))}}>Random</button>
    </div></div>
  );
}

export default App;
