import React from "react";
import Login1 from "./loginForm/Login1";
import { Routes, Route } from "react-router-dom";
import Mainfile from "./Component/Mainfile";
import Protected from "./Components/Protected";
import Register from "./loginForm/Register";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          name="dashboard"
          element={<Protected Component={Mainfile} />}
        />
      </Routes>
    </div>
  );
};

export default App;
