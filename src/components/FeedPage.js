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
      <div className="flex d-flex flex-row w-100 text-center justify-content-center">
        <div className="bg-secondary col justify-content-center align-items-center text-dark">
          <button onClick={foodScarcityBtn} className="w-100 h-100 p-3" style={{boxShadow:'none'}}>Food Scaricity</button>
        </div>
        <div className="bg-primary col justify-content-center align-items-center">
          <button onClick={secondFocus} className="w-100 h-100 p-3">Topic 2</button>
        </div>
        <div className="bg-success col justify-content-center align-items-center">
          <button onClick={thirdFocus} className="w-100 h-100 p-3">Topic 3</button>
        </div>
      </div>
      {getPage()}
    </div>
  );
}
