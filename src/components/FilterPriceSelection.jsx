import React, { useContext, useState } from "react";
import ItemContext from "./context/itemContext";
import CloseFilterBtn from "./buttons/CloseFilterBtn";

const FilterPriceSelection = () => {
  const {
    allCards,
    setPriceVal,
    priceVal,
    setValues,
    searchVal,
    setSearchVal,
    values,
    setAllCards,
    setFilterToggle,
    apiThirdData,
    setShowFilter,
    filterToggle,
    setMargin,
  } = useContext(ItemContext);


  const filteredInput = allCards.filter((items) => {
    return items.brand;
  });
  const filteredApiThirdData = apiThirdData.filter((val) => {
    return val.brand;
  });
  const combinedResults = [...filteredInput, ...filteredApiThirdData];

  const submitForm = (e) => {
    e.preventDefault();

    // const updateItems = combinedResults.filter((item) => {
    //   // if (item.brand.includes(checkboxStates)) {
    //     return item.brand===searchVal
    //   // }
    // });
    
    // console.log("updateItems", updateItems);
    
    // setAllCards(updateItems);
    setSearchVal("");
    setFilterToggle("none");
  };
  const rangeChng = (e) => {
    setValues(e.target.value);
    setPriceVal(e.target.value);
  };
  

  const uniqueBrands = [];

  combinedResults.forEach((val) => {
    if (!uniqueBrands.includes(val.brand)) {
      uniqueBrands.push(val.brand);
    }
  });

  const filterSearch = () => {
    setShowFilter("repeat(4, 1fr)");
    setMargin("3vw");
  };
  

  return (
    <div
      className="z-[1] md:bg-[#ffffffd5] bg-white min-h-[100vh] md:w-[20%] w-full md:ml-[5.6vw] transition-all ease-in-out duration-200 fixed md:top-[12vh] top-[7.5vh] left-0 shadow-2xl"
      style={{ display: filterToggle }}
    >
      <h1 className="text-black font-black text-2xl p-1">Filters</h1>
      <div className="text-black h-[100vh] flex flex-col items-center ">
        <div className="min-h-[15vh] w-[90%] flex flex-col gap-[2vh] items-center justify-center">
          <form
            onSubmit={(e) => submitForm(e)}
            className="flex h-full flex-col justify-center relative"
          >
            <div className="grid md:grid-cols-2 grid-cols-3 gap-2 min-h-[45vh] w-[100%]">
              {uniqueBrands.map((items, i) => {
                return (
                  <div key={i}>
                    {items ? (
                      <input
                        value={searchVal}
                        type="checkbox"
                        className="md:h-[1.5vh] bg-[#dad8d8bb] rounded outline-none text-black"
                      />
                    ) : (
                      ""
                    )}
                    {items}
                  </div>
                );
              })}
            </div>
            <div className=" mt-[1vh] flex flex-col items-center">
              <div className="md:text-sm font-semibold text-lg mt-[2vh]">
                Price Range
              </div>
              <div className="flex w-[100%] items-center justify-between text-xs">
                <p className="md:text-sm text-md">Min:₹1</p>
                <p className="md:text-sm text-md">Max:₹500</p>
              </div>
              <input
                onChange={rangeChng}
                value={values}
                className="md:w-[15vw] w-full"
                type="range"
                step="1"
                min="1"
                max="500"
              />
              <div>range:₹{values}</div>

              <button
                onClick={filterSearch}
                className="bg-[#2563eb] hover:bg-[#0051ff] text-white mt-[6vh] md:text-lg text-base py-1 px-4 rounded"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <CloseFilterBtn />
    </div>
  );
};

export default FilterPriceSelection;
