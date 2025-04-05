import React, { useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/firebase-config";
import ItemContext from "./context/itemContext";
import TopBar from "./TopBar";

const auth = getAuth(firebaseAppConfig);

const SideDetails = () => {
  const { setSavedSignupName, isMobile, setSavedSignupName2 } =
    useContext(ItemContext);

  const navigate = useNavigate();

  const[slider,setSlider]=useState('45vw');
  const myStuff = () => {
    if(slider==='45vw'){

      setSlider('0');
    }else if(slider==='0'){
      setSlider('45vw');
    }

  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container')) {
        setSlider("45vw");
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  return (
    <div className="px-2 py-4 md:gap-y-[4vh] gap-y-0 border border-[#c0c0c0d7] bg-white md:w-[25vw] w-full md:min-h-[100vh] flex md:justify-start justify-between md:flex-col">
      <TopBar />
      {isMobile === true ? <hr /> : ""}
      {isMobile === false ? (
        <Link to="/orders">
          <button className="hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white flex items-center justify-between w-[100%] hover:font-black font-semibold px-4 py-2">
            My Orders<i className="ri-arrow-right-s-line"></i>
          </button>
        </Link>
      ) : (
        ""
      )}
      {isMobile === false ? (
        <div className=" font-semibold px-4 py-2">
          <i className="ri-file-user-line"></i>
          <span className="ml-1 cursor-pointer">ACCOUNT SETTINGS</span>
          <Link to="/account"><div className="font-normal mt-[2vh] hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">
            Profile Information
          </div></Link>
        </div>
      ) : (
        ""
      )}
      <div className=" font-semibold px-4 py-2 flex flex-col gap-y-[2vh] relative">
        {isMobile === true ? (
          <div onClick={myStuff} className="menu-container">
            <i className="ri-folder-3-line"></i>
            <span className="ml-1 cursor-pointer font-black">My Stuff</span><i className="ri-arrow-right-s-line"></i>
          </div>
        ) : (
          <div>
            <i className="ri-folder-3-line"></i>
            <span className="ml-1 cursor-pointer">My Stuff</span>
          </div>
        )}
        {isMobile === true ? (
          <div style={{ transform: `translateX(${slider})`}} className="z-[1] transition ease-in-out duration-[0.1s] shadow-2xl absolute flex flex-col items-start justify-center bg-white w-[38vw] rounded overflow-hidden right-[-2vw] top-[5vh]">
            <Link to="/orders" className="w-full">
              <button className="hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white flex items-center justify-between w-[100%] hover:font-black font-semibold px-2 py-2">
                My Orders<i className="ri-arrow-right-s-line"></i>
              </button>
            </Link>
            <Link to="/myaddress" className="w-full">
              <div className="font-black hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">
                My Addresses
              </div>
            </Link>
            <Link to="/savedaddress" className="w-full">
              <div className="font-black hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">
                Saved Addresses
              </div>
            </Link>
            <Link to="/wishlist" className="w-full">
              <div className="font-black hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">
                My WishList
              </div>
            </Link>
            <button
              onClick={() =>
                signOut(
                  auth,
                  setSavedSignupName2(""),
                  setSavedSignupName(""),
                  swal({
                    title: "You are logged-out!",
                    icon: "success",
                  }),
                  navigate("/login")
                )
              }
              className="font-semibold hover:font-black px-2 w-full text-start py-1 hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white"
            >
              <i className="ri-shut-down-line"></i>
              <span className="ml-1 font-black">Log Out</span>
            </button>
          </div>
        ) : (
          ""
        )}
        {isMobile === false ? (
          <>
            <Link to="/myaddress">
              <div className="font-normal hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">
                My Addresses
              </div>
            </Link>
            <Link to="/savedaddress">
              <div className="font-normal hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">
                Saved Addresses
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="font-normal hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">
                My WishList
              </div>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
      {isMobile === false ? (
        <button
          onClick={() =>
            signOut(
              auth,
              setSavedSignupName2(""),
              setSavedSignupName(""),
              swal({
                title: "You are logged-out!",
                icon: "success",
              }),
              navigate("/login")
            )
          }
          className="font-semibold hover:font-black px-4 w-full text-start py-2 hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white"
        >
          <i className="ri-shut-down-line"></i>
          <span className="ml-1 hover:font-black">Log Out</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideDetails;
