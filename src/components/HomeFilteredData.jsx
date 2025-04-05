import Navbar from "./Navbar";
import Footer from "./Footer";
import FilteredData from "./FilteredData";
import { useContext } from "react";
import ItemContext from "./context/itemContext";
import HomeData from "./HomeData";

const HomeFilteredData = () => {

  const {searchInput } = useContext(ItemContext);

  return (
    <>
      <Navbar />
      {
      searchInput.length===0?
      <FilteredData />:
      <HomeData/>
      }
      <Footer />
    </>
  );
};

export default HomeFilteredData;
