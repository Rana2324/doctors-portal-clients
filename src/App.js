import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="teams" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
