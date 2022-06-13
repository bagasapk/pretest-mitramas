import { Route, Routes } from "react-router-dom";
import "./App.css";
import Customers from "./Customers";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
