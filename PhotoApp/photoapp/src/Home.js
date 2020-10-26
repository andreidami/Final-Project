import React, { useState, useEffect } from "react";
// import {link} from 'react-router-dom'

function Home() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("");

    const unsplashData = await data.json();
    console.log(unsplashData.bio);
    setItems(unsplashData.bio);
  };
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <h1>
          key = {item.id}
          {item.bio}
        </h1>
      ))}
    </div>
  );
}

export default Home;
