import React from "react";
import ProductInfo from "./ProductInfo";
import DogFood from "../assets/dog_food.jpg";
import DogBed from "../assets/DSC_2120.jpg";
import CatLitter from "../assets/cat_litter.jpg";
import CatTreats from "../assets/cat_treats.jpg";
import Medicine from "../assets/medicine.jpg";
import Oil from "../assets/oil.jpg";

const SellingProducts = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex gap-x-10">
        <ProductInfo img={Oil} product={"Oil"} price={"$100"} />
        <ProductInfo img={DogBed} product={"Dog Bed"} price={"$100"} />
        <ProductInfo img={CatLitter} product={"Cat Litter"} price={"$100"} />
        <ProductInfo img={CatTreats} product={"Cat Treats"} price={"$100"} />
        <ProductInfo img={Medicine} product={"Medicine"} price={"$100"} />
        <ProductInfo img={DogFood} product={"Dog Food"} price={"$100"} />
      </div>
    </div>
  );
};

export default SellingProducts;
