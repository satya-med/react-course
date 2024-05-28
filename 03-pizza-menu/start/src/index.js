import React from "react";
import ReactDOM from "react-dom/client";


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
    return <div>
        <Header />
        <Menu />
        <Footer />
    </div>
}

function Pizza(){
    return <div>
       <img src="pizzas/focaccia.jpg" alt="Pizza focaccia"/>
        <h2>Focaccia</h2>
        <p>Bread with italian olive oil and rosemary</p>
        </div>
}



const Header = () => {
    return <h1>Satya Pizzeria</h1>
}

const Menu = () => {
    return <div>
        <h2>our Menu</h2>
        <Pizza />
        <Pizza />
        <Pizza />
    </div>
} 

const Footer = () => {
    return <footer>{new Date().toLocaleTimeString()} We're currrently open</footer>
    //return React.createElement("footer",null,"We're currrently open");
} 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><App /></React.StrictMode>)