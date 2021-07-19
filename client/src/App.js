
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

      <Route exact path="/places/:id">
        <PlaceDetail />
      </Route>

      

      <Footer />



    </div>
  );
}


export default App;
