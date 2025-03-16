import PropTypes from "prop-types";
import '../assets/css/CardPizza.css'

const CardPizza = ({name, price, description, ingredients, img}) => {
  return (
  <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card w-100 mw-75 border p-2 mb-5">
    <img src={img} className="card-img-top img-fluid" alt={name} />
    <div className="card-body">
      <h5 className="card-title text-center">{name}</h5>
    </div>
    <div className="card-body border p-3">
      <h5 className="card-text text-center">Descripción:</h5>
      <div className="d-flex">
        <p className="card-text text-size text-center">{description}</p>
      </div>  
    </div>
    <div className="card-body border p-3">
      <h5 className="card-text text-center">Ingredientes:</h5>
      <ul className="list-unstyled text-center">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="card-text text-size">
            🍕 {ingredient}
          </li>
        ))}
      </ul>
    </div>
    <div className="card-body">
      <h5 className="card-text text-center mt-2 mb-4">Precio: ${price.toLocaleString("es-ES")}</h5>
      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-secondary"> Ver más 👀 </button>
        <button className="btn btn-outline-dark">Añadir 🛒</button>
      </div>
    </div>
  </div>
</div>
  );
};

// Validación de props con PropTypes
CardPizza.propTypes = {
  name: PropTypes.string.isRequired, // name debe ser un string obligatorio
  price: PropTypes.number.isRequired, // price debe ser un número obligatorio
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // ingredients debe ser un array de strings obligatorio
  img: PropTypes.string.isRequired, // img debe ser un string obligatorio
  description: PropTypes.string.isRequired, // description es un string obliatorio
};

export default CardPizza;
