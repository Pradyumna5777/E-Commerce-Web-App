import React, { useContext, useEffect, useState } from "react";
import 'remixicon/fonts/remixicon.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MenuBar from "./buttons/MenuBar";
import CartBtn from "./buttons/CartBtn";
import ItemContext from "./context/itemContext";
import LoginBtn from "./buttons/LoginBtn";
import SignupBtn from "./buttons/SignupBtn";
import UserProfilePic from "./UserProfilePic";

const auth = getAuth(firebaseAppConfig);
const Navbar = () => {
  const {
    setData,
    setHomeData,
    apiFourth,
    setApiFashion,
    apiThirdData,
    apiFashion,
    apiThirdDataClone,
    setApiThirdData,
    originalCards,
    allCards,
    setAllCards,
    searchInput,
    setSearchInput,
    users,
    setUsers,
    isMobile
  } = useContext(ItemContext);
  const[showSlider,setShowSlider]=useState("35vw");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUsers(user) : setUsers(false);
    });
  }, []);
  

  const formSubmit = (e) => {
    e.preventDefault();

    if (searchInput !== "") {
      const filteredInput = allCards.filter(
        (items) =>
          items.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          items.category.toLowerCase().includes(searchInput.toLowerCase())
      );
      const filteredApiThirdData = apiThirdData.filter((val) => {
        const { brand, category, title, model } = val;
        const lowerSearchInput = searchInput.toLowerCase();
        return (
          brand.toLowerCase().includes(lowerSearchInput) ||
          category.toLowerCase().includes(lowerSearchInput) ||
          title.toLowerCase().includes(lowerSearchInput) ||
          model.toLowerCase().includes(lowerSearchInput)
        );
      });
      const filteredFashionInput = apiFashion.filter((items) => {
        const lowerSearchInput = searchInput.toLowerCase();
        const itemTitle = items.title.toLowerCase();
        const itemCategory = items.category.toLowerCase();

        return (
          itemCategory.includes(lowerSearchInput) ||
          itemTitle.includes(lowerSearchInput)
        );
      });

      const combinedResults = [
        ...filteredInput,
        ...filteredApiThirdData,
        ...filteredFashionInput,
      ];

      const value = combinedResults.filter(
        (val) =>
          val.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          val.category.toLowerCase().includes(searchInput.toLowerCase()) ||
          val.model.toLowerCase().includes(searchInput.toLowerCase())
      );
      // console.log("value", value);
      setData(value);
    } else if (searchInput.length === 0) {
      setApiThirdData(apiThirdDataClone);
      setAllCards(originalCards);
      setApiFashion(apiFourth);
      setHomeData("");
    }
  };
  // console.log("searchinput",searchInput);
  const navigate = useNavigate();

  const clickHome = () => {
    navigate("/");
    setSearchInput("");
  };
  const electronicClick = () => {
    setSearchInput("");
    setApiThirdData(apiThirdDataClone);
  };

  const fashionClick = () => {
    setSearchInput("");
    setApiFashion(apiFourth);
    
  };
  const findMoreClick = () => {
    setSearchInput("");
    setAllCards(originalCards);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container')) {
        setShowSlider("35vw");
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  const checkUser=()=>{
    if(showSlider==="35vw"){
      setShowSlider("0");

    }else{
      setShowSlider("35vw");
    }
  }

  return (
    <div className="menu-container font-[Cinzel] bg-[#0F5AFC] flex items-center justify-center md:justify-between py-3 md:px-5 drop-shadow-xl text-white md:gap-0 fixed top-0 w-[100vw] z-[2]">
      <img
        onClick={clickHome}
        className="md:h-[6vh] h-[5vh] w-[auto] rounded"
        src="./images/Designer.png"
        alt="logo"
      />
      <div className="relative">
        <div className="flex items-center justify-between text-lg w-[70vw]">
          <div onChange={formSubmit} className="md:ml-0 ml-[5vw]">
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              className="border-[#7575752f] border rounded-l md:w-[25vw] w-[55vw] bg-[#fff] px-[1vw] py-[.4vh] text-black outline-none"
              placeholder="Search products..."
              type="text"
            />
            <button
              type="button"
              className=" text-black px-[1vh] py-[.4vh] outline-none rounded-r hover:text-white border-[#7575752f] border bg-[#fff] hover:bg-[#1b1b1be8]"
            >
              <i className="ri-search-line"></i>
            </button>
          </div>
          {
            isMobile ===false ?
         <> <button >
            <NavLink
              onClick={clickHome}
              to="/"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Home
            </NavLink>
          </button>
          <button onClick={electronicClick}>
            <NavLink
              to="/electronics"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Electronics
            </NavLink>
          </button>
          <button onClick={fashionClick}>
            <NavLink
              to="/fashion"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Fashion
            </NavLink>
          </button>
          <button onClick={findMoreClick}>
            <NavLink
              to="/findmore"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Find More
            </NavLink>
          </button></>:''
          }
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {users ? (
          <>
          {
            isMobile !==false?
            '':
            <CartBtn />
          }
            <MenuBar />
            <UserProfilePic />
          </>
        ) : (
          <>
          {
            isMobile !==true?
            <><LoginBtn />
            <SignupBtn /></>:<button onClick={checkUser} className="text-xl bg-[#000000ba] text-white px-[2.1vw] ml-[3vw] py-[0.6vh] rounded"><i className="ri-menu-unfold-line "></i></button>

          }
          <div  style={{ transform: `translateX(${showSlider})` }} className="absolute bg-white text-black top-[7vh] rounded overflow-hidden w-[30vw] right-[4.6vw] transition ease-in-out duration-[0.1s] shadow-2xl">
          <Link to="/login" className="w-[100%]"><button className="hover:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Log-In</div>
        </button></Link>
        <Link to="/signup" className="w-[100%]"><button className="hover:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Sign-Up</div>
        </button></Link>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
