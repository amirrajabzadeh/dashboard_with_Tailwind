import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
