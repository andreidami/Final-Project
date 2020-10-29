import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//  import {Link} from 'react-router-dom'
import Form from "./Form";
import Text from "./Text";

function RequestPhoto() {
  // const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState({});
  const obj = useParams();
  console.log(obj.id);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/${obj.id}?client_id=jh-BBeTY72RGtUv6080bnTbRZ5NvA__QtOzZFOl7HAM`
    )
      .then((response) => response.json())
      .then((obj) => {
        setUser({
          model: obj.exif.model,
          aperture: obj.exif.aperture,
          exposure: obj.exif.exposure_time,
          focal: obj.focal_length,
          iso: obj.iso,
          description: obj.description,
          photo: obj.urls.small,
          location: obj.location.name,
          downloads: obj.downloads,
        });
        console.log(obj);
        // setPhotos(photos);
      });
  }, []);

  return (
    <>
      <div>
        <img src={user.photo} alt={user} />
        <p>"{user.description}"</p>
        <p>Location: {user.location}</p>
        <p>Downloads: {user.downloads}</p>
        <p>{user.model}</p>
        <p>Aperture: {user.aperture}</p>
        <p>Exposure time: {user.exposure}</p>
        <p>Focal length: {user.focal}</p>
        <p>Iso: {user.iso}</p>
      </div>
      <div>
        {/* <Text /> */}
        {/* <Form /> */}
      </div>
    </>
  );
}
export default RequestPhoto;
