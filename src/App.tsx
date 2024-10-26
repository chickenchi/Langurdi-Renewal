import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default App;
