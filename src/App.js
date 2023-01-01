import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1 className="text-2xl">Error 404 Page not found!</h1>}/>
        </Routes>
      </div>
    </Router>

    /* <div>
      <Header />
      <Home />
      <SellingProducts />
    </div> */
  );
}

export default App;
