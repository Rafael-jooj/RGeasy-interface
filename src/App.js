import './App.css';
import Navigator from './components/Navbar';
import Carrossel from './components/Carrossel';
import Manual from './components/Manual';

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Carrossel/>
      <Manual/>
    </div>
  );
}

export default App;
