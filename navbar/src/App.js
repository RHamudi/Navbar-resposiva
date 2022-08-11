import {useState} from 'react'

function App() {
  const [active, setMode] = useState(false);
  const toggleMode = ()=> {
    setMode(!active)
  }

  return (
    <div className="App">
      <div className={active ? 'icon iconActive' : 'icon'}  >
        <div className="hamburguer hamburguerIcon" onClick={toggleMode}></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <div className="list">
          <ul className="listItems">
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
            <li>About US</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
