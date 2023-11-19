import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Letter from "../pages/Letter";
import DetailLetter from "../pages/DetailLetter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
        </Route>
        <Route path="/letter/:id" element={<DetailLetter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
