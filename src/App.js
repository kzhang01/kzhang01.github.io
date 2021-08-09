import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
