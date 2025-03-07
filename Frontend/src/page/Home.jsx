import Header from "../components/Header";
//import CardPizza from "../components/CardPizza";
//import { pizzas } from "../assets/js/pizzas";
import { useContext, useEffect, useState} from "react";
import {CartContext} from "../context/CartContext";

const Home = () => {

  const {addToCart} = useContext(CartContext);

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas`);
        const data = await res.json();
        setPizzas(data) ;
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    getPizzas();
  }, []);

  
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">🍕 Nuestro Menú 😋</h2>
        <div className="row d-flex justify-content-center">
          {pizzas.map((pizza) => (
            <div className="card col-12 col-md-6 col-lg-4 border p-2 mb-5" key={pizza.id}>
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body">
              <h5 className="card-title">{pizza.name}</h5>
            </div>
            <div className="card-body border p-3">
              <h5 className="card-text text-center">Descripcion:</h5>
              <div className="d-flex">
                <p className="card-text text-size text-justify">{pizza.desc}</p>
              </div>  
            </div>
            <div className="card-body border p-3">
              <h5 className="card-text text-center">Ingredientes:</h5>
              <ul className="list-unstyled">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="card-text text-size ">
                   🍕 {ingredient}
                  </li>
                ))}
              </ul>
            </div> 
           <div className="card-body">
              <h5 className="card-text text-center mt-2 mb-4">Precio: ${pizza.price.toLocaleString("es-ES")}</h5>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-secondary">Ver más 👀</button>
                <button className="btn btn-outline-dark" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
              </div>
            </div> 
          </div>
            /*<CardPizza 
              key={pizza.id} 
              name={pizza.name} 
              price={pizza.price} 
              ingredients={pizza.ingredients} 
              img={pizza.img} 
              description={pizza.desc}
            />*/
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
