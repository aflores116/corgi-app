import React from "react";
import BreederInfo from "../assets/mock-data/breeder-info.json";

interface BreederCardsProps {
  hasTitle: boolean;
}
const BreederCards = ({ hasTitle }: BreederCardsProps) => {
  return (
    <>
      <ul className="card-listing card-listing--block card-listing--border">
        {BreederInfo.map((breeder, index) => {
          return (
            <li className="card-listing__item" key={index}>
              <div className="card card--border">
                <div className="card__body">
                  {hasTitle ? (
                    <h3 className="card-body-title">{breeder.name}</h3>
                  ) : (
                    <h3>{breeder.name}</h3>
                  )}

                  <p>{breeder.description}</p>

                  <p>
                    {breeder.phone ? (
                      <a href={`tel:${breeder.phone}`}>{breeder.phone}</a>
                    ) : null}
                  </p>
                  <p>{breeder.address}</p>
                  <p>
                    {breeder.email ? (
                      <a href={`emailto:${breeder.email}`}>{breeder.email}</a>
                    ) : null}
                  </p>
                  {breeder.fakeBusiness ? (
                    <div className="fake-label">Not a real breeder</div>
                  ) : null}
                  {breeder.website ? (
                    <a className="btn" href={breeder.website}>
                      Go to website
                    </a>
                  ) : (
                    <p>No available website</p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BreederCards;
