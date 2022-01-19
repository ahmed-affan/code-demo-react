import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NameContext,PopUpContext } from "../context/NameContext";

function Hello() {
  const [nameContext, setNameContext] = useContext(NameContext);
  const [isOpen,setIsOpen] = useContext(PopUpContext)
  return (
    <div className="popup-box">
      <div className="box">
        <h1>Hello {nameContext}</h1>
        <button onClick={()=> setIsOpen(!isOpen)}>Close</button>
      </div>
    </div>
  );
}

export default Hello;
