import React, { useContext, useState } from "react";
import {NumbersContext} from '../context/NameContext';

function Test() {
  const [randomNum, setRandomNum] = useContext(NumbersContext);
  return (
    <div className="cards">
      {randomNum.map((num,idx) => (
        <div className="cards__item" key={idx}>
          <label className="cards__item">Num{idx+1}</label>
          <input type="text" value={num} 
          readOnly={true} className="cards__item"
          onCopy={(e)=>{
              e.preventDefault();
              return false;
          }}/>
        </div>
      ))}
    </div>
  );
}

export default Test;
