
import './App.css';
import {useState} from 'react'

function App() {

  const [input, setInput] = useState("");

  return (
    <div className="App">
       <input value={input} type="text"
       onChange={(event) => setInput(event.target.value)}
       />
       <button>add</button>
    </div>
  );
}

export default App;
