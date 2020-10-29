import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export default function Photos() {
  // const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/users/andrei_carina?client_id=jh-BBeTY72RGtUv6080bnTbRZ5NvA__QtOzZFOl7HAM"
    )
      .then((response) => response.json())
      .then((obj) => {
        setUser({
          bio: obj.bio,
        //  profilePic: obj.profile_image.medium
        })
        console.log(obj);
        setPhotos(obj.photos);
      });
  }, []);

  return (
    <>
      {/* <form>
         <label htmlFor="query"> </label>
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
         </button>    */}
      {/* </form> */}
      <div>
        {/* <p>{user.bio}</p> */}
        {/* <img src={user.profilePic} */}
              {/* alt={user}/> */}
      </div>
      <div className="card-list">
        {photos.map((pic) => (
          <div key={pic.id}>
             {/* Link to={/pic.id}  */}
            <Link to={`/portofolio/${pic.id}`}><img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="90%"
              height="90%"
            ></img></Link>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
