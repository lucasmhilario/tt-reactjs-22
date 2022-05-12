import {useEffect, useState} from "react";

function App() {
    const [contador, setContador] = useState (0);
  
    useEffect (() => {
      console.log("Rodei sem []");
    });
    
    useEffect (() => {
      console.log("Rodei com []");
    },[]);

  return (
    <div className="App">
      <h1>Target</h1>
      {contador}
      <button onClick={() => setContador (contador + 1)}>Somar</button>
    </div>
  );
}

export default App;
