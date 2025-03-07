import { createContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


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

  const stateGlobal = {
    cart,
    addToCart,
    removeFromCart,
    precioTotal
  }

  return (
    <CartContext.Provider value={ stateGlobal }>
      {children}
    </CartContext.Provider>
  );
};


