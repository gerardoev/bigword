import React, {useState} from 'react';
import './App.scss';
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [usuario, setUsuario] = useState(false);
  return (
    <div className="App">
      {usuario ? <h1>Loageado</h1>: <HomePage/>}
    </div>
  );
}

export default App;
