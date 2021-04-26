import { useState } from 'react';

import "./styles.css";

const MouseEvents = () => {
  const [coordX, setCoordX] = useState();
  console.log("coordX: ", coordX);
  const [coordY, setCoordY] = useState();
  console.log("coordY: ", coordY);

  // click event

  const handleClick = (event) => {
    console.log("event: ", event);
    console.log(`event type:  ${event.type}`);
  }

  // doubleClick event
  const handleDoubleClick = e => console.log("event type : ", e.target.id);

  // mouseMove event
  const handleMouseMove = (e) => {
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  }

  return (
    <>
      <h2>MouseEvents</h2>
      <p><span>X</span> and Y</p>
      <p><span>{coordX}</span> and {coordY}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        <li id="todo-1" onClick={handleClick} >
          todo item 1 <span>X</span>
        </li>
        <li id="todo-2 " onDoubleClick={handleDoubleClick}>
          todo item 2 <span>X</span>
        </li>
        <li onMouseMove = {handleMouseMove}>
          todo item 3 <span>X</span>
        </li>
        <li>
          todo item 4 <span>X</span>
        </li>
        <li>
          todo item 5 <span>X</span>
        </li>
      </ul>
      </div>
    </>
  );
};

export default MouseEvents;
