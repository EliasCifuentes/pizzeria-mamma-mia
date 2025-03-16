import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Pizza = () => {

    const [pizza, setPizza] = useState (null);
    const {id} = useParams();

    useEffect(() => {
        const getPizza = async () => {
          try {
            const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
            const data = await res.json();
            setPizza(data) ;
          } catch (error) {
            console.error("Error fetching pizzas:", error);
          }
        };
    
        getPizza();
      }, [id]);

      // Muestra "Cargando..." mientras la pizza aún no está disponible
    if (!pizza) {
        return <p>Cargando...</p>;
    }

  return (
  <div className="container d-flex justify-content-center align-items-center vh-75">
    <div className="card w-75 border p-2 mb-5">
      <div className="card-body">
        <h2 className="card-title text-center">Pizza {pizza.name}</h2>
      </div>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{ maxHeight: "300px", objectFit: "cover" }}/>
      <div className="card-body border p-3">
        <h5 className="card-text text-center">Descripción:</h5>
        <div className="d-flex">
          <p className="card-text text-size text-justify">{pizza.desc}</p>
        </div>  
      </div>
      <div className="card-body border p-3">
        <h5 className="card-text text-center">Ingredientes:</h5>
        <ul className="list-unstyled text-center">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index} className="card-text text-size">
              🍕 {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-text text-center mt-2 mb-4">Precio: ${pizza.price.toLocaleString("es-ES")}</h5>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pizza