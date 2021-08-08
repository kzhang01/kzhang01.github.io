import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
