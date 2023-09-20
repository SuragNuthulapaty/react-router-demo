import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export function ProfilePage() {
  const [two_plus_two_in, set_two_plus_two] = useState("");
  const [two, set_two] = useState("");
  const [three, set_three] = useState("");
  const [four, set_four] = useState("");
  const [five, set_five] = useState("");
  const [six, set_six] = useState("");

  function handleChange_tpt(e) {
    set_two_plus_two(e.target.value)
  }

  function handleChange_2(e) {
    set_two(e.target.value)
  }

  function handleChange_3(e) {
    set_three(e.target.value)
  }

  function handleChange_4(e) {
    set_four(e.target.value)
  }

  function handleChange_5(e) {
    set_five(e.target.value)
  }

  function handleChange_6(e) {
    set_six(e.target.value)
  }

  function allCorrect() {
    const a = parseInt(two_plus_two_in)===4;
    const b = parseInt(two)===4096;
    const c = parseInt(three)===-21;
    const d = parseInt(four)===110;
    const e = parseInt(five)===0;
    const f = parseInt(six)===49;

    return a && b && c && d && e && f
  }

  function showComp() {
    if(allCorrect()) {
      return <Link to="/info" className="text-dark rounded p-2 bg-dark text-white h-25 m-3 p-2" style={{textDecoration:'none'}}>Good Job</Link>
    }
  }
  const location = useLocation()
  const {age} = location.state
  // const age = 15;
  if (age < 19 ) {
    return (
      <div className='h-100 flex d-flex flex-column w-100 h-100 mh-100 align-items-center justify-content-center fill text-center'>
        <h1 className="display-1 text-dark m-2">Because you are young, you must answer some questions</h1>
        <div className="flex d-flex flex-row p-2 align-items-center justify-content-center mb-1">
          <p className="m-2 fs-3 text-dark">What is 2+2:</p>
          <input name="ag`e-in" id="tts-txt" className="m-3 p-2 rounded h-25" value={two_plus_two_in} onChange={handleChange_tpt}/>
        </div>
        <div className="flex d-flex flex-row p-2 align-items-center justify-content-center mb-1">
          <p className="m-2 fs-3 text-dark">What is 8^4:</p>
          <input name="ag`e-in" id="a" className="m-3 p-2 rounded h-25" value={two} onChange={handleChange_2}/>
        </div>
        <div className="flex d-flex flex-row p-2 align-items-center justify-content-center mb-1">
          <p className="m-2 fs-3 text-dark">What is 9-3*10</p>
          <input name="ag`e-in" id="tspt-txt" className="m-3 p-2 rounded h-25" value={three} onChange={handleChange_3}/>
        </div>
        <div className="flex d-flex flex-row p-2 align-items-center justify-content-center mb-1">
          <p className="m-2 fs-3 text-dark">What is 10+10*10:</p>
          <input name="ag`e-in" id="tpdt-txt" className="m-3 p-2 rounded h-25" value={four} onChange={handleChange_4}/>
        </div>
        <div className="flex d-flex flex-row p-2 align-items-center justify-content-center mb-1">
          <p className="m-2 fs-3 text-dark">What is (2^9-512)*400:</p>
          <input name="ag`e-in" id="tpts-txt" className="m-3 p-2 rounded h-25" value={five} onChange={handleChange_5}/>
        </div>
        <div className="flex d-flex flex-row p-2 align-items-center justify-content-center mb-1">
          <p className="m-2 fs-3 text-dark">What is 8-99*0+123/3:</p>
          <input name="ag`e-in" id="tpts-txt" className="m-3 p-2 rounded h-25" value={six} onChange={handleChange_6}/>
        </div>
        {showComp()}
      </div>
    );
  }
  else {
    return (
      <div className='h-100 flex d-flex flex-column w-100 h-100 mh-100 align-items-center justify-content-center fill'>
        <h1 className="display-1 text-dark">You are old.</h1>
        <h1 className="display-1 text-dark">Click the button below</h1>
        <Link to="/info" className="text-dark rounded p-2 bg-success h-25 m-3" style={{textDecoration:'none'}}>Go On</Link>
      </div>
    );
  }
}
