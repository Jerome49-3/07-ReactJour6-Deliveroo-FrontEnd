import { createContext, useReducer, useEffect } from "react";
import CaddyReducer from "../store/CaddyReducer";
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  // useEffect(() => {
  //   console.group("trace who use state");
  //   console.trace();
  //   console.groupEnd();
  // }, []);

  //******* STATE PANIER ************//
  const [state, dispatch] = useReducer(CaddyReducer, [], () => {
    const newShoppingCard = localStorage.getItem(
      `${import.meta.env.VITE_REACT_APP_NAME_LOCALSTORAGE}`
    );
    console.log("%cnewShoppingCard in App:", "color: green", newShoppingCard);
    if (newShoppingCard === null) {
      return [];
    } else {
      return JSON.parse(newShoppingCard);
    }
  });
  //******* STATE PRICE DEFAULT ************//
  // const [priceDefault, setPriceDefault] = useState(0);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
