import React from "react";
import Card from "./Card";

const DogList = ({ filteredDogs }) => {
  return (
    <div>
      {filteredDogs.map((dog, i) => {
        return <Card key={i}  name={dog} />;
      })}
    </div>
  );
};

export default DogList;