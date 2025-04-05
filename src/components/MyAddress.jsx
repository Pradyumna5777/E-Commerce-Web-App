import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideDetails from "./SideDetails";
import ItemContext from "./context/itemContext";
import HomeData from "./HomeData";

const MyAddress = () => {
  const {
    data,
    searchInput,
    allAddress,
    setAllAddress,
    myAddress,
    setMyAddress,
  } = useContext(ItemContext);


  const submitAddress = (e) => {
    e.preventDefault();
    setAllAddress([...allAddress, myAddress]);
    swal('Address Saved!')
    localStorage.setItem("address", JSON.stringify(allAddress));
  };


  useEffect(() => {
    console.log(allAddress);
  }, [allAddress]);

  useEffect(() => {
    console.log(localStorage.setItem("address", JSON.stringify(allAddress))
  );
  }, [allAddress]);

  const sinChange = (e) => {
    const val = e.target.value;
    const names = e.target.name;
    setMyAddress({
      ...myAddress,
      [names]: val,
    });
  };

  return (
    <>
      <Navbar />
      {
        searchInput.length === 0?
      <div className="md:flex gap-4 min-h-[100vh] mt-[9vh] w-[100vw] px-[5vw] py-[3vh]">
        <SideDetails />
        <form
          onSubmit={(e) => submitAddress(e)}
          className="px-[2vw] flex bg-white min-h-[100vh] border border-[#c0c0c0d7] md:w-[75vw] shadow-xl flex-col items-center justify-start md:gap-[20vh] gap-[10vh]"
        >
          <div className="grid md:grid-cols-2 md:gap-10 gap-5 mt-[6vh]">
            <div className="flex flex-col w-[80vw]">
              <label htmlFor="fullname">Full Name:(Required)*</label>
              <input
                onChange={(e) => sinChange(e)}
                name="fullname"
                type="text"
                placeholder="Full Name"
                required={true}
                className="placeholder:text-black md:w-[30vw] w-full bg-transparent py-3 px-4 border-2 text-md rounded outline-none text-black border-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phonenumber">Phone Number:(Required)*</label>
              <input
                onChange={(e) => sinChange(e)}
                name="phonenumber"
                type="number"
                placeholder="+91"
                required={true}
                className="placeholder:text-black md:w-[30vw] bg-transparent py-3 px-4 border-2 text-md rounded outline-none text-black border-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="pincode">Pincode:(Required)*</label>
              <input
                onChange={(e) => sinChange(e)}
                name="pincode"
                type="number"
                placeholder="Pincode"
                required={true}
                className="placeholder:text-black md:w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="state">State:(Required)*</label>
              <input
                onChange={(e) => sinChange(e)}
                name="state"
                type="text"
                placeholder="State"
                required={true}
                className="placeholder:text-black md:w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City:(Required)*</label>
              <input
                onChange={(e) => sinChange(e)}
                name="city"
                type="text"
                placeholder="City"
                required={true}
                className="placeholder:text-black md:w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="roadname">
                Road name, Area, Colony:(Required)*
              </label>
              <input
                onChange={(e) => sinChange(e)}
                name="roadname"
                type="text"
                placeholder="Road name, Area, Colony"
                required={true}
                className="placeholder:text-black md:w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
              />
            </div>
          </div>

          <button className="bg-[#FB641B] hover:bg-[#fb661bd6] text-white px-8 py-2 rounded md:text-base font-bold ">
            Save Address
          </button>
        </form>
      </div>
      : data.length === 0?
      <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">No Results</div>:
      <HomeData/>

      }

      <Footer />
    </>
  );
};

export default MyAddress;
