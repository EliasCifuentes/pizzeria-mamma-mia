import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../assets/js/pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">🍕 Nuestro Menú 😋</h2>
        <div className="row d-flex justify-content-center">
          {pizzas.map((pizza) => (
            <CardPizza 
              key={pizza.id} 
              name={pizza.name} 
              price={pizza.price} 
              ingredients={pizza.ingredients} 
              img={pizza.img} 
              description={pizza.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
