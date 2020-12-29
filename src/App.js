import './App.css';
import Converter from './components/Converter'

function App() {
  return (
    <div className="App">
      <h1 className="title">Currency Converter</h1>
      <div className="line">
        <Converter currencyA="EUR" currencyB="USD" />
        <Converter currencyA="USD" currencyB="EUR" />
      </div>
      <div className="line">
        <Converter currencyA="BRL" currencyB="USD" />
        <Converter currencyA="USD" currencyB="BRL" />
      </div>
      <div className="line">
        <Converter currencyA="EUR" currencyB="BRL" />
        <Converter currencyA="BRL" currencyB="EUR" />
      </div>
    </div>
  );
}

export default App;
