import "./assets/css/stylesheet.css";
import "./assets/css/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
library.add(faStar);

//components
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import Main from "./components/main/Main";
//images
import Logo from "./assets/images/logo-teal.svg";
import fetchDataMeal from "./assets/lib/fetchData/fetchDataMeal";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState(() => {
    const newShoppingCard = localStorage.getItem("CaddyDeliveroo");
    if (!newShoppingCard) {
      return [];
    } else {
      return JSON.parse(newShoppingCard);
    }
  });
  // const [quantity, setQuantity] = useState(() => {
  //   const newQuantityData = localStorage.getItem("quantityData");
  //   if (!newQuantityData) {
  //     return [];
  //   } else {
  //     return JSON.parse(newQuantityData);
  //   }
  // });
  useEffect(() => {
    fetchDataMeal(axios, setData, setIsLoading);
  }, []);
  console.log("data:", data);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header
        classHeader="header"
        classWrapper="wrapper"
        src={Logo}
        classImg="imgHeader"
        data={data}
        classTxt="titleOne"
      />
      <Main
        data={data}
        classMain="wrapper banner"
        panier={panier}
        setPanier={setPanier}
        faStar={faStar}
      />
    </>
  );
}

export default App;
