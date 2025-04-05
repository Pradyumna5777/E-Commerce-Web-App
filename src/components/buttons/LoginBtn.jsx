import React from "react";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <button
        className="bg-[#FB641B] hover:bg-[#fb661bd6] md:text-base text-xs md:py-[1vh] md:px-[2vh] text-white px-1 py-[1vh] rounded "
      >
        <i className="ri-login-circle-line"></i>Login
      </button>
    </Link>
  );
};

export default LoginBtn;
