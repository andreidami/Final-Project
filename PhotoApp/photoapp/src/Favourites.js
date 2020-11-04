import React from "react";
import { getFavourites } from "./util/favourites";
import { Link } from "react-router-dom";

const Favourites = () => {
  const photo = getFavourites();

  return (
    <div className="card-list">
      {photo.map((pic) => (
        <div key={pic.id}>
          <Link to={`/portofolio/${pic.id}`}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.photo}
              width="95%"
              height="95%"
            ></img>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Favourites;
