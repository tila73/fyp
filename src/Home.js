import React from "react";
import pets from "./assets/pets.jpg";
import Header from "./Header";
import SellingProducts from "./components/SellingProducts";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <img className="w-full" src={pets} alt="pets" />
      </div>
      <SellingProducts />
      <div className="grid-cols-3 grid-flow-row-dense md:grid-cols-6"></div>
    </div>
  );
}

export default Home;
