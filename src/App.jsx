import React, { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemContextProvider from "./components/context/ItemContextProvider";
import SplashScreen from "./components/SplashScreen";

// Lazy loading components
const DetailCard = lazy(() => import("./components/DetailCard"));
const CheckOutTem = lazy(() => import("./components/CheckOutTem"));
const Cart = lazy(() => import("./components/Cart"));
const Home = lazy(() => import("./components/Home"));
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));
const Protector = lazy(() => import("./components/Protector"));
const Electronics = lazy(() => import("./components/Electronics"));
const Fashion = lazy(() => import("./components/Fashion"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));
const Account = lazy(() => import("./components/Account"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Orders = lazy(() => import("./components/Orders"));
const MyAddress = lazy(() => import("./components/MyAddress"));
const SavedAddress = lazy(() => import("./components/SavedAddress"));
const FindMore = lazy(() => import("./components/FindMore"));
const AboutProduct = lazy(() => import("./components/AboutProduct"));
const AddressComp = lazy(() => import("./components/AddressComp"));
const TopBar = lazy(() => import("./components/TopBar"));
const HomePage = lazy(() => import("./components/HomePage"));
const SearchBrand = lazy(() => import("./components/SearchBrand"));
const HomeFilteredData = lazy(() => import("./components/HomeFilteredData"));
const WishList = lazy(() => import("./components/WishList"));
const WishListBtn = lazy(() => import("./components/buttons/WishListBtn"));
const SimilarItems = lazy(() => import("./components/SimilarItems"));
const FilteredData = lazy(() => import("./components/FilteredData"));
const HomeData = lazy(() => import("./components/HomeData"));
const AllSimilarProducts = lazy(() => import("./components/AllSimilarProducts"));
const ConfirmDetails = lazy(() => import("./components/ConfirmDetails"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ItemContextProvider>
      <BrowserRouter>
        {loading ? (
          <SplashScreen />
        ) : (
          <Suspense fallback={<SplashScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<Protector />}>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
              </Route>
              <Route path="/detailcard" element={<DetailCard />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/wishlistBtn" element={<WishListBtn />} />
              <Route path="/checkouttem" element={<CheckOutTem />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/account" element={<Account />} />
              <Route path="/savedaddress" element={<SavedAddress />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/myaddress" element={<MyAddress />} />
              <Route path="/findmore" element={<FindMore />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="aboutproduct" element={<AboutProduct />} />
              <Route path="addresscomp" element={<AddressComp />} />
              <Route path="topbar" element={<TopBar />} />
              <Route path="homepage" element={<HomePage />} />
              <Route path="searchbrand" element={<SearchBrand />} />
              <Route path="homefiltereddata" element={<HomeFilteredData />} />
              <Route path="similaritems" element={<SimilarItems />} />
              <Route path="filtereddata" element={<FilteredData />} />
              <Route path="homedata" element={<HomeData />} />
              <Route path="allsimilarproducts" element={<AllSimilarProducts />} />
              <Route path="confirmdetails" element={<ConfirmDetails />} />
            </Routes>
          </Suspense>
        )}
      </BrowserRouter>
    </ItemContextProvider>
  );
}

export default App;
