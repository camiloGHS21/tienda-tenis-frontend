import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import  Login  from "./pages/Login";
import  Register  from "./pages/Register";
<<<<<<< HEAD
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

=======
import  Know_us  from "./pages/know_us";
>>>>>>> ad8300d469af4c3e550c422a101f04f1924a80fd
const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
<<<<<<< HEAD
        <Route path="/" exact element={<Products />} />
        <Route path="contact" exect element={<Contact />} />
        <Route path="Login" exact element={< LoginAuth/>} />
        <Route path="Register" exact element={< RegisterAuth/>} />
=======
        <Route path="/" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Login" element={< Login/>} />
        <Route path="Register" element={< Register/>} />
        <Route path="Know_us" element={< Know_us/>} />
        
>>>>>>> ad8300d469af4c3e550c422a101f04f1924a80fd
      </Routes>
      <Footer/>
    </Router>
  );
};



createRoot(document.getElementById("root")).render(<App />);
