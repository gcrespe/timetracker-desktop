import './App.css';
import time from './assets/timeManagement.svg'

function App() {
  return (
    <div className="App">
      <header className="App">
        <div className="LoginArea">
        </div>
        <div className="imageArea">
          <img src={time} style={{width: '70%', height: '70%', paddingTop: "15%"}}/>
        </div>
      </header>
    </div>
  );
}

export default App;
