import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import  Login  from "./pages/Login";
import  Register  from "./pages/Register";
const isAuthenticated = () => {
  // Verificar si la cookie JSESSIONID está presente
  const jsessionId = document.cookie
    .split('; ')
    .find(row => row.startsWith('JSESSIONID='));

  // Si la cookie JSESSIONID está presente, el usuario está autenticado
  return jsessionId !== undefined;
};
const LoginAuth = () => {
  if (!isAuthenticated()) {
    // Si el usuario no está autenticado, redirigirlo a la página de inicio
    return < Login/>;
  }

};
const RegisterAuth = () => {
  if (!isAuthenticated()) {
    // Si el usuario no está autenticado, redirigirlo a la página de inicio
    return < Register/>;
  }
};

const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="contact" exect element={<Contact />} />
        <Route path="Login" exact element={< LoginAuth/>} />
        <Route path="Register" exact element={< RegisterAuth/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};



createRoot(document.getElementById("root")).render(<App />);
