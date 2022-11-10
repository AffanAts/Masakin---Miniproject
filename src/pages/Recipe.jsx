import React from "react";
import Header from "../component/header";
import GoToTop from "../component/GoToTop";
import MenuRecipe from "../component/menu/RecipeMenu";

export default function Recipe() {
  return (
    <>
      <body>
        <GoToTop />
        <Header />
        <div className="margin-top-header">
          <MenuRecipe />
        </div>
      </body>
    </>
  );
}
