
import React, { useState } from "react";


function Toggle() {
   
//We're setting the initial state here as false, because the button should be "OFF" when the component first renders.(true or false)
  const [isOn, setIsOn] = useState(false);

//this handles the on/off based on the previous state that had been defined
//Toggle Logic: The function (isOn) => !isOn takes the current value of isOn and returns its opposite. If isOn is true, it returns false, and vice versa.

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

//this is to change the background of the button
  const color = isOn ? "red" : "white";

  //Here, we're doing some conditional rendering to dynamically determine the button's text based on our state variable, {isOn ? "ON" : "OFF"}
  //add an event listener to handleclick
  //check if the state is off/false,background is white. If it is of/true, background is red
  
return (
  <button style={{ background: color }} onClick={handleClick}>
    {isOn ? "ON" : "OFF"}
  </button>
);
}

export default Toggle;
