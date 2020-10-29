import React from "react";
// import {link} from 'react-router-dom'
import Photos from "./Photos";
//  import Form from "./Form";
// import Text from "./Text";

function Portofolio() {
  return (
    <div>
      <div>
        <h1 className="Portofolio-title">Portofolio</h1>
        <div>
          <Photos />
        </div>
        <div className="text-form">
          {/* <Text /> 
          <Form /> */}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
