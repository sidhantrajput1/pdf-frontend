import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
