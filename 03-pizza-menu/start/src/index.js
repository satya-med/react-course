import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  //const style = { color : "red", fontSize : "48px", textTransform : "uppercase" }
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Satya Pizzeria</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  return (
    <div className="menu">
      <h2>our Menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" photoName="pizzas/focaccia.jpg" price={10}/>
        <Pizza name="Pizza Margherita" ingredients="Tomato and mozarella" photoName="pizzas/margherita.jpg" price={12} /> */}
    </div>
  );
};

function Pizza({ pizzaObj }) {
  const { photoName, name, ingredients, price, soldOut } = pizzaObj;
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {/* {soldOut ? <span>Sold out</span> : <span>{price}</span>} */}
        <span>{soldOut ? "Sold out" : price}</span>
      </div>
    </li>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(hour >= openHour && hour <= closeHour) alert("We're currrently open!")
  // else alert("We're currrently close!")
  //  {new Date().toLocaleTimeString()} We're currrently open

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer",null,"We're currrently open");
};

const Order = function ({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're currrently open from {openHour}:00 to {closeHour}:00. Come visit
        us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
