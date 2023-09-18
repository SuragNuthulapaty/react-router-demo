import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function AgePage() {
  return (
    <div
      className='container-fluid h-100 flex d-flex flex-column w-100 h-100 bg-primary mh-100 align-items-center justify-content-center'
    >
      <h1 className="display-1 text-white">Please Enter Your Age</h1>
      <div className="flex d-flex flex-row p-2 align-items-center justify-content-center">
        <input name="age-in" id="input-text" className="m-3 p-2 rounded"/>
        {/* <p className="mt-1 ml-1">this is some more text</p> */}
        <Link to={{ pathname:"/profile", state:{age:12} }} className="text-white rounded p-2 bg-success">Submit</Link>
      </div>
    </div>
  )
}
