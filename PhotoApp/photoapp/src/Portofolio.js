import React from "react";
// import {link} from 'react-router-dom'
import Photos from "./Photos";
import Form from "./Form";

function Portofolio() {
  return (
    <div>
      <div>
        <h1 className="Portofolio-title">Portofolio</h1>
        <Photos />
        <Form />
      </div>
    </div>
  );
}

export default Portofolio;
