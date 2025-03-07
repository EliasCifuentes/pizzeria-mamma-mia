import { useContext } from "react";
//import { pizzaCart } from "../assets/js/pizzas";
import {CartContext} from "../context/CartContext";

const Cart = () => {

  const { cart, removeFromCart, addToCart, precioTotal } = useContext(CartContext);

  /*const [cart, setCart] = useState(
    pizzaCart.map(pizza => ({ ...pizza, count: pizza.count })) 
  );

  const aumentarCantidad = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id 
        ? { ...pizza, count: pizza.count + 1 } 
        : pizza
    ));
  };

  const disminuirCantidad = (id) => {
    setCart(cart
      .map(pizza => 
        pizza.id === id 
          ? { ...pizza, count: pizza.count - 1 } 
          : pizza
      )
      .filter(pizza => pizza.count > 0)
    );
  };*/

  //const precioTotal = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);


  return (
<div className="container mt-4 mb-4 text-center">
  <h2 className="mb-4">Detalle del Pedido:</h2>

  <div className="row justify-content-center">
    <div className="col-md-10 col-lg-8 mx-auto border-start border-end p-2">
      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="col-12 mb-3 border p-2 d-flex align-items-center justify-content-between"
        >
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid flex-shrink-0"
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="mb-0 flex-grow-1 ms-3">{pizza.name}</h5>
          <p className="mb-0 ms-4">${pizza.price.toLocaleString("es-ES")}</p>
          <div className="d-flex align-items-center ms-3">
            <button
              className="btn btn-outline-danger me-2"
              onClick={() => removeFromCart(pizza.id)}
            >
              -
            </button>
            <span className="mx-2">{pizza.count}</span>
            <button
              className="btn btn-outline-primary ms-2"
              onClick={() => addToCart(pizza)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  <h4 className="mt-4">Total: ${precioTotal.toLocaleString("es-ES")}</h4>

  <div className="mt-3 d-flex justify-content-center">
    <button className="btn btn-outline-dark">Pagar </button>
  </div>
</div>
  );
}

export default Cart;
