import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Slice1";

function Card({ data }) {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  function handleClick() {
    if (toggle) {
      dispatch(addItem());
    } else {
      dispatch(removeItem());
    }
    setToggle(!toggle);
  }
  return (
    <div style={{ border: "solid 1px gray", padding: "10px" }}>
      <h1>{data.food}</h1>
      <h3>{data.price}</h3>
      <button onClick={handleClick}>{toggle ? "Add" : "Remove"}</button>
    </div>
  );
}

export default Card;
