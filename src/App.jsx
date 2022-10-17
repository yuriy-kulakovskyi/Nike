import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import New from './components/New/New';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
      <New />
    </div>
  );
}

export default App;
