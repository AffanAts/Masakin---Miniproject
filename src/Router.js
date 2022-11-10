import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import TipsnTrick from "./pages/TipsnTrick";
import Recipe from "./pages/Recipe";

import Comment from "./pages/CommentUser";
import Form from "./pages/CommentForm";
import Admin from "./pages/CommentAdmin";

import Rawon from "./pages/food/Rawon";
import Rendang from "./pages/food/Rendang";
import Pempek from "./pages/food/Pempek";
import Papeda from "./pages/food/Papeda";
import KerakTelor from "./pages/food/KerakTelor";
import AmparanTatak from "./pages/food/AmparanTatak";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/tips" exact element={<TipsnTrick />} />
        <Route path="/recipe" exact element={<Recipe />} />
        <Route path="/comment" exact element={<Comment />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/Admin14045" exact element={<Admin />} />
        <Route path="/food/rawon" exact element={<Rawon />} />
        <Route path="/food/Rendang" exact element={<Rendang />} />
        <Route path="/food/Pempek" exact element={<Pempek />} />
        <Route path="/food/Papeda" exact element={<Papeda />} />
        <Route path="/food/KerakTelor" exact element={<KerakTelor />} />
        <Route path="/food/AmparanTatak" exact element={<AmparanTatak />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
