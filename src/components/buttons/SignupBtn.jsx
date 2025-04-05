import React from "react";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to="/signup">
      <button className="bg-[#FB641B] hover:bg-[#fb661bd6] md:py-[1vh] md:px-[1vh] py-[1vh] text-white md:text-base text-xs px-1 rounded ">
        <i className="ri-user-line"></i>Signup
      </button>
    </Link>
  );
};

export default SignupBtn;
