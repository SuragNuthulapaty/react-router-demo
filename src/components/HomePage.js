import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export function AgePage() {

  const [inputText, setInputText] = useState("");

  function getAge() {
    if (document.getElementById("input-text") == null) {
      return -1
    }

    return document.getElementById("input-text").value
  }

  function handleChange(e) {
    setInputText(e.target.value)
  }

  return (
    <div
      className='h-100 flex d-flex flex-column w-100 h-100 mh-100 align-items-center justify-content-center fill'
    >
      <h1 className="display-1 text-dark">Please Enter Your Age</h1>
      <div className="flex d-flex flex-row p-2 align-items-center justify-content-center">
        <input name="age-in" id="input-text" className="m-3 p-2 rounded h-25" value={inputText} onChange={handleChange}/>
        {/* <p className="mt-1 ml-1">this is some more text</p> */}
        <Link to={{ pathname:"/info", state:{age:getAge()} }} className="text-white rounded p-2 bg-dark h-25" style={{textDecoration:'none'}}>Submit</Link>
      </div>
    </div>
  )
}
