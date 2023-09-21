import React from "react";
import { useState } from "react";
import { FoodScarcity } from "./FoodScarcity";

export function FeedPage() {
  const [page_val, set_page_val] = useState(0);

  function foodScarcityBtn() {
    set_page_val(0)
  }

  function secondFocus() {
    set_page_val(1)
  }

  function thirdFocus() {
    set_page_val(2)
  }

  function getPage() {
    if (page_val===0){
      return <FoodScarcity/>
    } else if (page_val === 1) {
      return <p>topic 2</p>
    } else {
      return <p>topic 3</p>
    }
  }

  return (
    <div>
      <div className="flex d-flex flex-row w-100 text-center justify-content-center p-2">
        <div className="col justify-content-center align-items-center text-dark m-1 p-2">
          <button onClick={foodScarcityBtn} className="w-100 h-100 p-3" style={{borderRadius:'20px', backgroundColor:'white'}}>Food Scaricity</button>
        </div>
        <div className="col justify-content-center align-items-center m-1 p-2">
          <button onClick={secondFocus} className="w-100 h-100 p-3" style={{borderRadius:'20px', backgroundColor:'white'}}>Topic 2</button>
        </div>
        <div className="col justify-content-center align-items-center m-1 p-2">
          <button onClick={thirdFocus} className="w-100 h-100 p-3" style={{borderRadius:'20px', backgroundColor:'white'}}>Topic 3</button>
        </div>
      </div>
      {getPage()}
    </div>
  );
}
