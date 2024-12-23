import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Pizza Castle, we believe that vegetarian pizza can be a flavor adventure like no other.
        Our pizzas are crafted with the freshest, locally-sourced vegetables and ingredients, ensuring every bite is bursting with taste and nutrition.
        From crisp bell peppers and juicy tomatoes to aromatic herbs and creamy cheeses, our toppings are a celebration of vibrant flavors and wholesome goodness.
        Our commitment goes beyond just great taste. We’re dedicated to sustainability and health, offering pizzas that are not only delicious but also align with a conscious lifestyle. 
        Whether you’re a lifelong vegetarian or just looking to enjoy a meat-free meal, our pizzas promise a satisfying and guilt-free indulgence.
        Join us at Pizza Castle where each slice is a testament to our passion for quality and flavor. 
        Experience vegetarian pizza like never before—fresh, flavorful, and truly fantastic.
        </p>
     
        
      </div>
    </div>
  );
}

export default About;