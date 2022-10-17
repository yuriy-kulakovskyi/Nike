import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import New from './components/New/New';
import TopSneakers from './components/TopSneakers/TopSneakers';
import Categories from './components/Categories/Categories';
import Start from './components/Start/Start';
import More from './components/More/More';
import End from './components/End/End';
import Center_End from './components/Center_End/Center_End';
import Groups_boxes from './components/Groups_boxes/Groups_boxes';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
      <New />
      <TopSneakers />
      <Categories />
      <Start />
        <Center_End />
        <Groups_boxes />
        <More />
        <End />
    </div>
  );
}

export default App;
