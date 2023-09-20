import React from "react";

export function FeedPage() {

  var page_val = 0

  function foodScarcityBtn() {
    console.log("food scaricity")
    page_val = 0
  }

  function secondFocus() {
    console.log(2)
    page_val = 1
  }

  function thirdFocus() {
    console.log(3)
    page_val = 2
  }

  function getVal() {
    return page_val
  }

  function getPage() {
    console.log('func')

    var p_v = getVal()

    if (p_v===0){
      return <p>Food scarcity</p>
    } else if (p_v === 1) {
      return <p>topic 2</p>
    } else {
      return <p>topic 3</p>
    }
  }

  return (
    <div>
      <div className="flex d-flex flex-row w-100 text-center justify-content-center">
        <div className="bg-secondary col justify-content-center align-items-center text-dark">
          <button onClick={foodScarcityBtn} className="p-1 m-2">Food Scaricity</button>
        </div>
        <div className="bg-primary col justify-content-center align-items-center">
          <button onClick={secondFocus} className="p-1 m-2">Topic 2</button>
        </div>
        <div className="bg-success col justify-content-center align-items-center">
          <button onClick={thirdFocus} className="p-1 m-2">Topic 3</button>
        </div>
      </div>
      {getPage()}
      {console.log('ran here')}
    </div>
  );
}
