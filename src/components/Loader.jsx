import React from 'react'
import loader from "../assets/loader.svg"
import "../index.css"

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        <img src={loader} alt='loader' className="loader" />
      </div>
    </div>
  );
}