import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};



createRoot(document.getElementById("root")).render(<App />);
