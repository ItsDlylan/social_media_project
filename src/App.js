import './App.css';
import Main from './Components/Main.js'
import Signin from './Components/Signin.js'
import Create from './Components/Create.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Main/>
      <Signin />
      <Create />
    </div>
  );
}

export default App;
