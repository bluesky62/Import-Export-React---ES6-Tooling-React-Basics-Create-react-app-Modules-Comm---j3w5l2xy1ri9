import React, { Component, useState } from "react";
import '../styles/App.css';
import SubHeading from "../components/SubHeading.js";
import InputQuery from "../components/InputQuery.js";
import SubmitButton from "../components/SubmitButton.js";


const App = () => {
  return (
    <div id="main">
     <Heading />      
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}

export default App;

