import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, redirect} from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import  Login  from "./pages/Login";
import  Register  from "./pages/Register";
import Payment from "./pages/payment";
import AboutUs from "./pages/know_us";
import ProductDetail from './pages/ProductDetail';
import NotFound from "./pages/NotFound";

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
const PaymentAuth = ()=>{
  if (isAuthenticated()) {
    // Si el usuario no está autenticado, redirigirlo a la página de inicio
    return < Payment/>;
  }else{
    redirect("/")
  }
}

const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="contact" exact element={<Contact />} />
        <Route path="Login" exact element={< LoginAuth/>} />
        <Route path="Register" exact element={< RegisterAuth/>} />
        <Route path="know_us" exact element={< AboutUs/>} />
        <Route path="payment" exact element={< PaymentAuth/>} />
        <Route path="product/:name" exact element={<ProductDetail/>} />
        <Route path="*" exact element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};



createRoot(document.getElementById("root")).render(<App />);
