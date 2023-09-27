import React from "react";
import { useState } from "react";
import { FoodScarcity } from "./FoodScarcity";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Ignorance } from "./Ignorance";

export function FeedPage() {
  const [page_val, set_page_val] = useState(0);
  const [fs_color, set_fs_color] = useState('lightgray')
  const [t2_color, set_t2_color] = useState('white')
  const [t3_color, set_t3_color] = useState('white')
  const [fs_bw, sfsbw] = useState('0px')
  const [t2_bw, st2bw] = useState('2px')
  const [t3_bw, st3bw] = useState('2px')


  function foodScarcityBtn() {
    set_page_val(0)

    set_t2_color('white')
    set_t3_color('white')
    set_fs_color('lightgray')

    sfsbw('0px')
    st2bw('2px')
    st3bw('2px')
  }

  function secondFocus() {
    set_page_val(1)

    set_fs_color('white')
    set_t3_color('white')
    set_t2_color('lightgray')

    sfsbw('2px')
    st2bw('0px')
    st3bw('2px')
  }

  function thirdFocus() {
    set_page_val(2)

    set_t2_color('white')
    set_fs_color('white')
    set_t3_color('lightgray')

    sfsbw('2px')
    st2bw('2px')
    st3bw('0px')
  }

  function getPage() {
    if (page_val===0){
      return <FoodScarcity/>
    } else if (page_val === 1) {
      return <Ignorance/>
    } else {
      return <p>topic 3</p>
    }
  }

  return (
    <div>
      <div className="flex d-flex flex-row w-100 text-center justify-content-center p-2">
        <div className="col justify-content-center align-items-center text-dark m-1 p-2">
          <button onClick={foodScarcityBtn} className="w-100 h-100 p-3" style={{borderRadius:'20px', backgroundColor:fs_color, borderWidth:fs_bw}}>Food Scaricity</button>
        </div>
        <div className="col justify-content-center align-items-center m-1 p-2">
          <button onClick={secondFocus} className="w-100 h-100 p-3" style={{borderRadius:'20px', backgroundColor:t2_color, borderWidth:t2_bw}}>Ignorance</button>
        </div>
        <div className="col justify-content-center align-items-center m-1 p-2">
          <button onClick={thirdFocus} className="w-100 h-100 p-3" style={{borderRadius:'20px', backgroundColor:t3_color, borderWidth:t3_bw}}>Allyship</button>
        </div>
      </div>
      <div className="pl-2">
       {getPage()}
      </div>
      <div className="flex d-flex align-items-center justify-content-center pb-3">
        <Link to={{ pathname:"/"}} className="text-white rounded p-2 bg-dark h-25" style={{textDecoration:'none'}}>Return To Home Page</Link>
      </div>
    </div>
  );
}
