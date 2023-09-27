import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio.jsx";
import { ColorProvider } from "./components/ColorContext";
import ColorPallet from "./components/ColorPallet";
import Navigators from "./components/Navigators";
import Opening from "./components/Opening";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
function App() {
  return (
    <ColorProvider>
      <Opening />
      <div className="App text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Navigators />
      <ColorPallet />
    </ColorProvider>
  );
}

export default App;
