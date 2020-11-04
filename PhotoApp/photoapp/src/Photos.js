import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/users/andrei_carina?client_id=jh-BBeTY72RGtUv6080bnTbRZ5NvA__QtOzZFOl7HAM"
    )
      .then((response) => response.json())
      .then((obj) => {
        setPhotos(obj.photos);
      });
  }, []);

  return (
    <>
      <div className="card-list">
        {photos.map((pic) => (
          <div key={pic.id}>
            <Link to={`/portofolio/${pic.id}`}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="95%"
                height="95%"
              ></img>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
