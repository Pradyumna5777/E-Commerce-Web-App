import React, { useContext, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";
import ItemContext from "../context/itemContext";
import firebaseAppConfig from "../../util/firebase-config";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(firebaseAppConfig);

const MenuBar = () => {
  const {showMenu, setShowMenu,isMobile, setSearchInput } = useContext(ItemContext);


  const navigate=useNavigate();

  useEffect(() => {
    setShowMenu("-100vh");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container')) {
        setShowMenu("-100vh");
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 



  const menuClick = () => {
    if (showMenu === "-100vh") {
      if(isMobile===true){
        
        setShowMenu("-35vh");
      }else{
        setShowMenu("0");

      }
    }else{
      setShowMenu("-100vh");

    }
  };
  const menuHider=()=>{
    setShowMenu("-100vh");
    setSearchInput('');

  }

  return (
    <div className="menu-container relative text-black">
      <button
        onClick={menuClick}
        className="bg-[#FB641B] hover:bg-[#fb661bd6] py-[1vh] md:px-[1.8vh] text-white px-3 rounded"
      >
        <i className="ri-menu-line"></i>
      </button>
      <div
        className="flex flex-col justify-center rounded overflow-hidden items-center gap-[0.3vh] absolute md:h-[22.5vh] h-[40.5vh] md:w-[15vw] w-[45vw] right-0 md:top-10 top-[41vh] bg-white transition ease-in-out duration-[0.1s] shadow-2xl "
        style={{ transform: `translateY(${showMenu})` }}
      >
        {
          isMobile===true?
       <> <Link to="/" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Home</div>
        </button></Link>
        <Link to="/electronics" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Electronics</div>
        </button></Link>
        <Link to="/fashion" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Fashion</div>
        </button></Link>
        <Link to="/findmore" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Find More</div>
        </button></Link>
        <Link to="/cart" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Cart</div>
        </button></Link></>:''
        }
        <Link to="/account" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base  text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Account</div>
        </button></Link>
        <Link to="/wishlist" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Wishlist</div>
        </button></Link>
        <Link to="/orders" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold">Orders</div>
        </button></Link>
        <Link to="/contactus" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg md:text-base text-sm hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold ">Contact-Us</div>
        </button></Link>
        <button
          onClick={() =>
            signOut(
              auth,
              navigate('/'),
              swal({
                title: "You are logged-out!",
                icon: "success",
              })
            )
          }
          className="hover:text-lg md:text-base text-sm font-semibold hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center"
        >
          <div className="hover:text-lg font-semibold md:text-base text-sm">
            Log-Out <i className="ri-logout-circle-r-line"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
