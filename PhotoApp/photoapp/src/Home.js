import React, { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/users/andrei_carina?client_id=jh-BBeTY72RGtUv6080bnTbRZ5NvA__QtOzZFOl7HAM"
    )
      .then((response) => response.json())
      .then((obj) => {
        setUser({
          bio: obj.bio,
          profilePic: obj.profile_image.large,
          name: obj.name,
          location: obj.location,
          instagram: obj.portfolio_url,
        });
        console.log(obj);
      });
  }, []);

  return (
    <>
      <div>
        <p>{user.bio}</p>
        <p>{user.name}</p>
        <img src={user.profilePic} alt={user} />
        <p>{user.location}</p>
        <div>
          <a href={user.instagram}>Instagram</a>
        </div>
      </div>
    </>
  );
}
