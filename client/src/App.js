import logo from './logo.png';
import './App.css';
import {useState, useEffect} from 'react';
import {Message} from './Components/Message/Message'

function App() {
  const [state, setState] = useState({})

  useEffect(() => {
    fetch("/api").then(response => {
      if (response.status === 200) {
        return response.json()
      }
    }).then(data => setState(data))
    .then(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <img src={logo} alt='Badger logo'/>
      <div className='Title'>BADGER</div>
      <Message prop={state}/>
    </div>
  );
}

export default App;
