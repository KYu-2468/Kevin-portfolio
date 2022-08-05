import "./App.css";
import { About, Projects, Work, Education } from "./pages";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Work />
      <Education />
    </div>
  );
}

export default App;
