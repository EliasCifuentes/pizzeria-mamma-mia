import Footer from "./components/Footer";
import Login from "./page/Login";
// import Navbar from "./components/Navbar";
import Navegation from "./components/Navegation";
import Register from "./page/Register";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Pizza from "./page/Pizza";
import Profile from "./page/Profile";
import NotFound from "./page/NotFound";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider }  from "./context/CartContext";


const App = () => {
  return (     
<> 
  <BrowserRouter>
    <CartProvider> 
    < Navegation />
    < Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/register" element= {<Register />}/>
      <Route path="/login" element= {<Login />}/>
      <Route path="/cart" element= {<Cart />}/>
      <Route path="/pizza/p001" element= {<Pizza />}/>
      <Route path="/profile" element= {<Profile />}/>
      <Route path="/*" element= {< NotFound />}/>
    </Routes>
    </CartProvider>
  </BrowserRouter>
  { /* <Navbar /> */ }
  <Footer />
</>

  );
};

export default App;

