 import React, { useState, useEffect } from "react";
import DogList from "./DogList";
// import { dogs } from "./dogs";
import SearchBox from "./SearchBox";
// import {link} from 'react-router-dom'





   function Home() {
    const [dogs, setDogs] = useState([]);
    
    const [searchfield, setSearchfield] = useState("");
  
    const onSearchChange = (event) => {
      setDogs(event.target.value);
    };
  
    useEffect(() => {
       fetch("",)
        .then((response) => response.json())
        .then((dogs) => {
          console.log(dogs.message)
          setDogs(dogs.message);
          
        })
    }, []);
  
    const filteredDogs = Object.keys(dogs).filter((dogs) => {
      return dogs.toLowerCase().includes(searchfield.toLocaleLowerCase());
    });
  
    return (
      <div className="app">
        <h1>Dog Breads</h1>
        <SearchBox searchChange={onSearchChange} />
        <DogList filteredDogs={filteredDogs} />
      </div>
    );}
 //)};
    export default Home;
                                          
