import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInput, userInput } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state-management/store";

export default function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode.isDarkMode)
  const dispatch = useDispatch();
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter  basename={process.env.PUBLIC_URL}> 
        <Routes>
          {/* Home route */}      
            <Route path="/admin-dashboard" element={<Home />} />
          {/* List route */}
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInput} title="Add new Title" />} />
            
          </Route>
          {/* Products route */}
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={ productInput } title="Add new Product"/>} />
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}