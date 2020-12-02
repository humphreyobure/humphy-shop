import React from "react";
import { NavLink } from "react-router-dom";

const Deal = () => {
  const deal = {
    image: "flare_dress.png",
    title: "Latest In Ladies Fashion",
    text:
      "Ladies Ladies This is a must wear thing, stand out of the rest of the group by this new designer, just on Humpy.",
    link: "/category/women",
  };
  return (
    <div className="container deals-contaner mb-4">
      <div className="deals-content shadow">
        <img
          className="deals-image"
          src={require(`../../../assets/images/${deal.image}`)}
          alt="#"
        />
        <div className="deals-text">
          <div className="heading-block">
            <h1 className="deals-title mb-4">{deal.title}</h1>
            <p className="text mb-4">{deal.text}</p>
            <NavLink className="btn btn-primary btn" to={deal.link} exact>
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
