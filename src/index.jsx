import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import App1 from "./components/HousePreview/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/preview" element={<App1 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
1;
