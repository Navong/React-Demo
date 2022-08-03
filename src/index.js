//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

var name = "Navong!";
var ramNumber = Math.floor(Math.random() * 10) + 1;
console.log(ramNumber);

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>My lucky number is {ramNumber}</p>
  </div>,

  document.getElementById("root")
);
