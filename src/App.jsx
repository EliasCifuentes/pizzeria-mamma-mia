
import Footer from "./components/Footer";
//import Login from "./components/Login";
import Navbar from "./components/Navbar";
//import Register from "./components/Register";
//import Home from "./layouts/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
      
<div className="container-fluid"> 
  <Navbar />
  {/*<Home /> */} 
  {/*<Register /> */} 
  {/*<Login /> */}
  <Cart />
  <Footer />
</div>

  );
};

export default App;

