
import './App.css';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Places from "./components/Places"




function App() {
  return (
    <div className="App">
      <Route path="/">
        <Navbar />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/places">
        <Places />
      </Route>



    </div>
  );
}


export default App;
