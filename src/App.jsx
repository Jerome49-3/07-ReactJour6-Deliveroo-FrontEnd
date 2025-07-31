import "./assets/css/stylesheet.css";
import "./assets/css/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";
const socket = io(`${import.meta.env.VITE_REACT_APP_URL}`);
// import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
library.add(faStar);

//components
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import Main from "./components/main/Main";
//images
import Logo from "./assets/images/logo-teal.svg";
import fetchDataMeal from "./assets/lib/fetchData/fetchDataMeal";
// import fetchCaddy from "./assets/lib/fetchData/fetchCaddy";

function App() {
  const [data, setData] = useState();
  // console.log("data in App:", data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataMeal(axios, setData, setIsLoading);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected:", socket.id);
    });
    socket.on("caddyUpdated", (change) => {
      console.log("%cchange in App:", "color: blue", change);
      // fetchCaddy(axios, setPanier);
    });
    socket.on("disconnect", () => {
      console.log(socket.id);
    });
    socket.on("error", (error) => {
      console.log("%cerror on socket in Home page:", "color: red", error);
    });
    return () => socket.off("caddyUpdated");
  }, []);

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
      <Main data={data} classMain="wrapper banner" faStar={faStar} />
    </>
  );
}

export default App;
