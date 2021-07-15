
import './App.css';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Places from "./components/Places"
import PlaceDetail from './components/PlaceDetail';
import NewPlace from './components/NewPlace';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Route path="/">
        <Navbar />
      </Route>

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
