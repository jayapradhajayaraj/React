//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

var day, timeofday;
const d = new Date();
timeofday = d.getHours();

const colorofday = {
  color: "",
};
if (timeofday < 12) {
  day = "Good Morning";
  colorofday.color = "red";
} else if (timeofday >= 12 && timeofday <= 18) {
  day = "Good AfterNoon";
  colorofday.color = "green";
} else if (timeofday > 18 && timeofday <= 24) {
  day = "Good Evening";
  colorofday.color = "blue";
}
ReactDom.render(
  <div>
    <h1 className="heading" style={colorofday}>
      {day}
    </h1>
  </div>,
  document.getElementById("root")
);
