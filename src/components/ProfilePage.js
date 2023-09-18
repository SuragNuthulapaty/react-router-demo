import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function ProfilePage() {
  const location = useLocation()
  console.log(location)
  const {age} = location.state
  // const age = 15;
  return (
    <div>
      <h1>Profile Page! {age}</h1>
    </div>
  );
}
