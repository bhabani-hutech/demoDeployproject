// import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
// import Details from "./Pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/welcome" element={<Home />} /> */}
          <Route exact path="/" element={<Dashboard />} />
          {/* <Route exact path="/details" component= {Details}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
