import React from "react";
import { Link } from "react-router-dom";

const WishListBtn = () => {

  return (
    <Link to="/wishlist">
      <button className="md:border-solid md:border-[1px] border-[#0000004e] md:w-[3.8vw] w-[10.5vw] flex items-center justify-center md:mt-0 ml-[-2vw] md:ml-0 mt-[-0.8vh] md:py-[1vh] rounded-full ">
        <i className="ri-heart-3-fill text-red-600 text-2xl"></i>
      </button>
    </Link>
  );
};

export default WishListBtn;
