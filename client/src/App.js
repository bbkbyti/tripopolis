
import './App.css';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Places from "./components/Places"
import PlaceDetail from './components/PlaceDetail';
import NewPlace from './components/NewPlace';
import Footer from './components/Footer';
import { useState, useEffect } from "react";
import Dropdown from './components/Dropdown';
import Favorites from './components/Favorites';
import FavoritesDetails from './components/FavoritesDetails';
import About from './components/About';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });


  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/places">
        <Places />
      </Route>
      <Route exact path="/new-place">
        <NewPlace />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Route exact path="/places/:id">
        <PlaceDetail />
      </Route>
      <Route exact path="/favorites/:id">
        <FavoritesDetails/>
      </Route>
      <Route exact path="/about">
      <About />
      </Route>
      
      <Footer />
    </div>
  );
}


export default App;
