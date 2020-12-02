import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "money.png",
      title: "Best Prices",
      description:
        "Absolutely the cheapest online Shop there is, there can be.",
    },
    {
      image: "truck.png",
      title: "Fast delivery",
      description:
        "We got decentralized stores, so delivery is there at your doorstep.",
    },
    {
      image: "check-circle.png",
      title: "Free Returns",
      description:
        "Humpy got you in terms of returns, trust us.",
    },
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <div className="card sellout-card card-body shadow" key={index}>
          <img
            className="sellout-icon"
            src={require(`../../../assets/icons/${card.image}`)}
            alt="Fila Back"
          />
          <div className="mt-3 text-center">
            <h5 className="sellout-title">{card.title}</h5>
            <p className="text-muted">{card.description}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container sellout-section mb-4">
      {generateSelloutCards()}
    </div>
  );
};

export default SelloutCards;
