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
import { /*BrowserRouter,*/ Navigate, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
//import { CartProvider }  from "./context/CartContext";
import { UserContext /*, UserProvider*/ } from "./context/UserContext";
import { useContext } from "react";
import ProtectedRoute from "./context/ProtectedRoute";

const App = () => {

  const { token } = useContext(UserContext)
  return (     
<> 
    {/*<BrowserRouter>
    <UserProvider>
    <CartProvider>*/}
    < Navegation />
    < Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/login" element={ token ? <Navigate to={"/"}/> : <Login />} />
      <Route path="/register" element={ token ? <Navigate to={"/"}/> : <Register />} />
      <Route path="/cart" element= {<Cart />}/>7
      <Route path="/pizza/:id" element= {<Pizza />}/>
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
      <Route path="/*" element= {< NotFound />}/>
    </Routes>
    {/*</CartProvider>
    </UserProvider>
  </BrowserRouter>*/}
  <Footer />
</>

  );
};

export default App;

