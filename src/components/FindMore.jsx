import { useContext, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import ItemContext from "./context/itemContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import FilterPriceSelection from "./FilterPriceSelection";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import SideBtn from "./buttons/SideBtn";
import HomeData from "./HomeData";

const FindMore = () => {
  const navigate = useNavigate();
  const {
    noUsers,
    toggleHeart,
    wishItem,
    bookBtn,
    showFilter,
    gap,
    margin,
    allCards,
    obj,
    setObj,
    cart,
    users,
    AddCartBtn,
    setSearchInput,
    searchInput,
    currentDateTime,
    data,
    isMobile
  } = useContext(ItemContext);

  useEffect(() => {
    console.log(obj);
  }, [obj]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const tileBtn = (e) => {
    setSearchInput('');
    setObj({...e, bookingTime: currentDateTime});
    navigate("/aboutproduct");
  };

  return (
    <>
      <Navbar />
      {
        searchInput.length===0?

      
      <div className="min-h-[100vh] bg-white mt-[1vh] md:mt-[9vh] object-cover w-[100vw] flex gap-[4vh] justify-center py-[4vh] flex-wrap text-[#fff] relative">
        {allCards.length == 0 || <SideBtn />}

        {/* <FilterPriceSelection /> */}
        <div
          className="text-black transition-all ease-in-out"
          style={{
            display: "grid",
            gridTemplateColumns: `${showFilter}`,
            gap: `${gap}`,
            marginLeft: `${margin}`,
          }}
        >
          {allCards == "" ? (
            <div className="w-[95vw] ml-[6vw] flex items-center justify-center">
              <ShimmerSimpleGallery
                card
                imageHeight={250}
                row={8}
                col={isMobile?2:4}
                caption
              />
            </div>
          ) : (
            allCards.map((e, index) => {
              return (<>
                <div key={index}>
                  <div className="md:h-[67vh] h-[53vh] shadow-xl flex flex-col items-center gap-[4vh] w-[48vw] md:mt-4 mt-7 md:w-[20vw] overflow-hidden relative border-[#0000001b] border-[1px]">
                    <div onClick={() => tileBtn(e, index)} className="relative">
                      <img
                      loading="lazy"
                        className="md:h-[29vh] h-[22vh] cursor-pointer md:w-[20vw] w-[100%] object-cover hover:scale-[1.1] hover:rounded-b-[6px] transition duration-300 ease-out"
                        src={e.images[0]}
                      />
                      <div className="flex flex-col gap-1 absolute top-0 left-[-6vw] md:left-0">
                        <span className="bg-[#e01a1a8a] px-1">
                          {e.stock + " " + e.availabilityStatus.toLowerCase()}
                        </span>
                        <span className="bg-[#41dc3594] px-1 ">
                          {e.discountPercentage + "%" + " " + "off"}
                        </span>
                      </div>
                    </div>
                    {users && (
                      <button
                        className="absolute top-0 right-0 px-2"
                        onClick={() => toggleHeart(e, index)}
                      >
                        {wishItem.some((item)=>{
                          return item.title===e.title
                        }) ? (
                          <i
                            className="ri-heart-3-fill text-2xl"
                            style={{ color: "#f00" }}
                          ></i>
                        ) : (
                          <i
                            className="ri-heart-3-fill text-2xl"
                            style={{ color: "#deddddc7" }}
                          ></i>
                        )}
                      </button>
                    )}
                    <div className="flex flex-col w-full px-1 md:p-2 md:gap-y-[1vh] gap-y-[0.3vh]">
                      <h1 className="md:text-xl text-sm font-semibold -mt-6">
                        {e.title.length < 20
                          ? e.title
                          : e.title.slice(0, 20) + "..."}
                      </h1>
                      <hr className="border-t-[#24232330]" />
                      <p className="font-bold md:mt-4 mt-2 md:text-sm text-xs">
                        Price:{" "}
                        <span className="text-sm">
                          <del className="text-gray-400 md:text-sm text-xs">
                            ₹{e.price}
                          </del>{" "}
                          <span className="font-semibold md:text-sm text-xs">
                            ₹
                            {(
                              e.price -
                              (e.discountPercentage / 100) * e.price
                            ).toFixed(2)}
                          </span>
                        </span>
                      </p>
                      {e.brand ? (
                        <p className="md:text-sm text-xs">
                          <span className="font-bold md:text-sm text-xs">
                            Brand:
                          </span>{" "}
                          {e.brand}
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="font-semibold md:text-sm text-xs">
                        <b className="md:text-md text-xs">Delivery Time:</b>{" "}
                        {e.shippingInformation}
                      </p>
                      {e.returnPolicy ? (
                        <p className="font-semibold md:text-sm text-xs">
                          <b className="md:text-md text-xs">Return Policy:</b>{" "}
                          {e.returnPolicy}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    {users ? (
                      <Link to="/aboutproduct" className="w-full">
                        <button
                          onClick={() => bookBtn(e, index)}
                          className="hover:text-[2.3vh] transition-all ease-out duration-[0.1s] bg-[#FF9F00] hover:bg-[#ff9d00cf] w-[100%] p-[1vh] text-white text-center md:text-base text-sm font-semibold absolute md:bottom-[5.3vh] bottom-[4.8vh]"
                        >
                          Buy Now
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => noUsers(e, index)}
                        className="hover:text-[2.3vh] transition-all ease-out duration-[0.1s] bg-[#FF9F00] hover:bg-[#ff9d00cf] w-[100%] p-[1vh] text-white text-center md:text-base text-sm font-semibold absolute md:bottom-[5.3vh] bottom-[4.8vh]"
                      >
                        Buy Now
                      </button>
                    )}
                    {cart.some((item) => item.title === e.title) ? (
                      <Link to="/cart" className="w-full">
                        <button className="bg-[#dc2626] hover:text-[2.3vh] transition-all ease-out duration-[0.1s] hover:bg-[#ff4b4b] w-[100%] p-[1vh] text-white text-center font-semibold md:text-base text-sm absolute bottom-0">
                        Go to Cart{" "}
                        <i className="ri-arrow-right-wide-line"></i>
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => AddCartBtn(e, index)}
                        className="hover:text-[2.3vh] transition-all ease-out duration-[0.1s] bg-[#FB641B] hover:bg-[#fb661bd6] w-[100%] p-[1vh] text-white text-center font-semibold md:text-base text-sm absolute bottom-0"
                      ><i className="ri-shopping-cart-line "></i>{" "}
                        Add to Cart
                      </button>
                      
                    )}
                    
                  </div>
                </div>
               
              </>);
            })
          )}
          
        </div>
        
      </div>: data.length === 0?
      <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">No Results</div>:
      <HomeData/>
        }
     
      <Footer />
    </>
  );
};
export default FindMore;
