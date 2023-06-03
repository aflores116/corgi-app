import React from "react";
import corgis from "../assets/mock-data/corgi-identity.json";

const Cards = () => {
  return (
    <>
      <ul className="card-listing">
        {corgis.map((corgi, index) => {
          return (
            <li className="card-listing__item" key={index}>
              <div className="card">
                <div className="card__media">
                  <img
                    src="http://www.lifeaftercollege.com/wp-content/uploads/2015/08/Day-435.jpg"
                    alt=""
                    className="card__media-img"
                  />
                </div>
                <div className="card__body">
                  <h3>{corgi.name}</h3>
                  <p>
                    Is a {corgi.breed}, they are {corgi.age} years old, and
                    their fur color is {corgi.color}. {corgi.name} is
                    {corgi.personality_traits.join(", ")}. Their Favorite toy is
                    {corgi.favorite_toy}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cards;
