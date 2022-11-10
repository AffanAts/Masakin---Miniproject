import React from "react";
import Header from "../component/header";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Header />
      <div>
        <center>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Fbackground%2F404%20Error-bro.png?alt=media&token=e6aff7e6-03ec-443d-9744-95763ef89635"
            alt="404"
            style={{width:"30%", height:"10%"}}
          />
        </center>
        <br />
        <center>
          <Link className="nav-link active btn btn-success backToHome" to="/">
            Back To Home
          </Link>
        </center>
      </div>
    </>
  );
}
