import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import New from './components/New/New';
import TopSneakers from './components/TopSneakers/TopSneakers';
import Categories from './components/Categories/Categories';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
      <New />
      <TopSneakers />
      <Categories />
    </div>
  );
}

export default App;
