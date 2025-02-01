import PropTypes from "prop-types";
import '../assets/css/CardPizza.css'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card col-12 col-md-6 col-lg-4 border p-2 mb-5">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <div className="card-body border p-3">
        <h5 className="card-text text-center">Ingredientes:</h5>
        <div className="d-fex">
          <p className="card-text text-size text-center">{ingredients}</p>
        </div>
        
      </div>
      <div className="card-body">
        <h5 className="card-text text-center mt-2 mb-4">Precio: ${price.toLocaleString("es-ES")}</h5>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary">Ver más 👀</button>
          <button className="btn btn-outline-dark">Añadir 🛒</button>
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
};

export default CardPizza;
