import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export function ProfilePage() {
  const [two_plus_two_in, set_two_plus_two] = useState("");
  function handleChange(e) {
    set_two_plus_two(e.target.value)
  }
  function showComp() {
    if(two_plus_two_in) {
      return <Link to="/feed" className="text-white rounded p-2 bg-success h-25 m-3" style={{textDecoration:'none'}}>Go On</Link>
    }
  }
  const location = useLocation()
  const {age} = location.state
  // const age = 15;
  if (age < 19 ) {
    return (
      <div className='h-100 flex d-flex flex-column w-100 h-100 bg-primary mh-100 align-items-center justify-content-center fill text-center'>
        <h1 className="display-1 text-white m-2">Because you are young, you must answer some math questions</h1>
        
        <div className="flex d-flex flex-row p-2 align-items-center justify-content-center">
          <p className="m-2">What is 2+2:</p>
          <input name="ag`e-in" id="tpt-txt" className="m-3 p-2 rounded h-25" value={two_plus_two_in} onChange={handleChange}/>
        </div>
        {showComp()}
      </div>
    );
  }
  else {
    return (
      <div className='h-100 flex d-flex flex-column w-100 h-100 bg-primary mh-100 align-items-center justify-content-center fill'>
        <h1 className="display-1 text-white">You are old, nice. </h1>
        <h1 className="display-1 text-white">Click the button below</h1>
        <Link to="/feed" className="text-white rounded p-2 bg-success h-25 m-3" style={{textDecoration:'none'}}>Go On</Link>
      </div>
    );
  }
}
