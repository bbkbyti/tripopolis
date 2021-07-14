
import './App.css';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Places from "./components/Places"
import PlaceDetail from './components/PlaceDetail';
import NewPlace from './components/NewPlace';




function App() {
  return (
    <div className="App">
      <Route path="/">
        <Navbar />
      </Route>

      <Route path="/">
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



    </div>
  );
}


export default App;
