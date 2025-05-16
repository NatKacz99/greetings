import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();
let greeting = "";
let inlineColor = "";

if (hour < 12) {
  greeting = "Good morning";
  inlineColor = {
    color: "red",
  };
} else if (hour < 18) {
  greeting = "Good afternoon";
  inlineColor = {
    color: "green",
  };
} else if (hour > 18) {
  greeting = "Good evening";
  inlineColor = {
    color: "blue",
  };
}

ReactDOM.render(
  <h1 style={inlineColor}>{greeting}</h1>,
  document.getElementById("root")
);
