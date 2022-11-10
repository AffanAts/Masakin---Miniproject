import React from "react";
import Header from "../component/header";
import GoToTop from "../component/GoToTop";
import MenuProcess from "../component/menu/MenuProcess";

export default function Recipe() {
  return (
    <>
      <body>
        <GoToTop />
        <Header />
        <div className="margin-top-header">
          <MenuProcess />
        </div>
      </body>
    </>
  );
}
