import React, { useState, useEffect } from "react";

export default function Photos() {
  // const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/users/andrei_carina?client_id=jh-BBeTY72RGtUv6080bnTbRZ5NvA__QtOzZFOl7HAM"
    )
      .then((response) => response.json())
      .then((query) => setPhotos(query.photos));
  }, []);

  return (
    <>
      <form>
        {/* <label htmlFor="query"> </label>
        <input
          type="text"
          name="search"
          placeholder={`Search Photos`}
          value={query}
          onChange={(e) => {setQuery(e.target.value)
          } 
          //  fetch
        }
        />
         <button type="submit" className="button">
           Search
         </button>   */}
      </form>
      <div className="card-list">
        {photos.map((pic) => (
          <div key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="90%"
              height="90%"
            ></img>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
