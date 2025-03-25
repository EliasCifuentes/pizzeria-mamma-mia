import { createContext, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import PropTypes from "prop-types";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //const { token } = useContext (UserContext)


// Función para aumentar la cantidad de una pizza en el carrito
const aumentarCantidad = (id) => {
  setCart(cart.map(pizza => 
    pizza.id === id 
      ? { ...pizza, count: pizza.count + 1 } 
      : pizza
  ));
};

// Función para disminuir la cantidad de una pizza en el carrito
const disminuirCantidad = (id) => {
  setCart(cart
    .map(pizza => 
      pizza.id === id 
        ? { ...pizza, count: pizza.count - 1 } 
        : pizza
    )
    .filter(pizza => pizza.count > 0)
  );
};

// Función para agregar una pizza al carrito 
const addToCart = (pizza) => {
  const pizzaExistente = cart.find((p) => p.id === pizza.id);

  if (pizzaExistente) {
    aumentarCantidad(pizza.id);
  } else {
    setCart([...cart, { ...pizza, count: 1 }]);
  }
};

// Función para eliminar una pizza del carrito 
const removeFromCart = (id) => {
  const pizzaExistente = cart.find((p) => p.id === id);

  if (pizzaExistente && pizzaExistente.count > 1) {
    disminuirCantidad(id);
  } else {
    setCart(cart.filter((pizza) => pizza.id !== id));
  }
};


  // Calcular total
  const precioTotal = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

  // Funcion para enviar el carrito de compra al Backend

  const realizarPedido = async () => {
    const token = localStorage.getItem('token')

    if(token){

      const pedido = {
        detalle: cart.map(({id, name, price, count}) =>({id, nombre: name, precio: price, cantidad: count})),
        total: precioTotal
      };
      try {
        const res = await axios.post('http://localhost:5000/api/checkouts', pedido,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        Swal.fire({
                    icon: "success",
                    title: "Compra Realizada",
                    text: `Respuesta del servidor: ${res.data.message || "Pedido procesado correctamente"}`
                  });

        setCart([]);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error
          });
      }
    }
  }

  const stateGlobal = {
    cart, 
    setCart,
    addToCart,
    removeFromCart,
    realizarPedido,
    precioTotal
  }

  return (
    <CartContext.Provider value={ stateGlobal }>
      {children}
    </CartContext.Provider>
  );
};

// Validación de PropTypes
CartProvider.propTypes = {
children: PropTypes.node.isRequired,
};
