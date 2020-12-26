import './App.css';
import Converter from './components/Converter'

function App() {
  return (
    <div className="App">
      <Converter currencyA="EUR" currencyB="USD" />
    </div>
  );
}

export default App;
