import { BrowserRouter, Routes, Route } from "react-router-dom";

import Listarticles from "./components/articles/Listarticles";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";

import Listcategories from "./components/categories/Listcategories";
import Viewcategorie from "./components/categories/Viewcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Editcategorie from "./components/categories/Editcategorie";

import Listscategories from "./components/scategories/Listscategories";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Editscategorie from "./components/scategories/Editscategorie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="articles" element={<Listarticles />}></Route>
        <Route path="articles/:id" element={<Viewarticle />}></Route>
        <Route path="addarticle" element={<Insertarticle />}></Route>
        <Route path="updatearticle/:id" element={<Editarticle />}></Route>

        <Route path="categories" element={<Listcategories />}></Route>
        <Route path="categories/:id" element={<Viewcategorie />}></Route>
        <Route path="addcategorie" element={<Insertcategorie />}></Route>
        <Route path="updatecategorie/:id" element={<Editcategorie />}></Route>

        <Route path="scategories" element={<Listscategories />}></Route>
        <Route path="scategories/:id" element={<Viewscategorie />}></Route>
        <Route path="addscategorie" element={<Insertscategorie />}></Route>
        <Route path="updatescategorie/:id" element={<Editscategorie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
