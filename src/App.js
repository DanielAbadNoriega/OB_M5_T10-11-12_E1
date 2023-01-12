import logo from './logo.svg';
import './App.css';
import Element from './components/pure/element';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Element></Element>
      </header>
    </div>
  );
}

export default App;
