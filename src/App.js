import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, About, Portfolios } from "./pages";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolios" element={<Portfolios />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
