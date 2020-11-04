import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { checkPhoto, updateFavourites } from "./util/favourites";

function RequestPhoto() {
  const [photo, setPhoto] = useState({});

  const obj = useParams();

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/${obj.id}?client_id=jh-BBeTY72RGtUv6080bnTbRZ5NvA__QtOzZFOl7HAM`
    )
      .then((response) => response.json())
      .then((obj) => {
        setPhoto({
          model: obj.exif.model,
          aperture: obj.exif.aperture,
          exposure: obj.exif.exposure_time,
          focal: obj.exif.focal_length,
          iso: obj.exif.iso,
          description: obj.description,
          photo: obj.urls.small,
          location: obj.location.name,
          downloads: obj.downloads,
          id: obj.id,
          tags:obj.tags
        });
      });
  }, [obj]);

  const isPhotoInFavourites = photo && checkPhoto(photo.id);

  const handleClick = () => {
    updateFavourites(photo);
  };

  return (
    <>
      <div className="requestphoto">
        <img src={photo.photo} alt={photo} />
        <button disabled={isPhotoInFavourites} onClick={handleClick}>
          {isPhotoInFavourites ? "ADDED IN FAVOURITES" : "ADD TO FAVOURITES"}
        </button>

        <p className="userdescription" style={{ fontWeight: "bold" }}>
          "{photo.description}"
        </p>

        <p>Location: {photo.location}</p>
        <p>Downloads: {photo.downloads}</p>
        <p>{photo.model}</p>
        <p>Aperture: {photo.aperture}</p>
        <p>Exposure time: {photo.exposure}</p>
        <p>Focal length: {photo.focal}</p>
        <p>Iso: {photo.iso}</p>
        <span>Tags: </span>
        <ul>
         {photo.tags && photo.tags.map((tag) =>
        {return <li>{tag.title};</li>})}
          </ul>
      </div>
      <div></div>
    </>
  );
}
export default RequestPhoto;
