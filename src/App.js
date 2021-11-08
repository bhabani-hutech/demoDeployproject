// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
// import Details from "./Pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component= {Dashboard}/>
        {/* <Route exact path="/details" component= {Details}/> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
