import { useContext } from "react";
import { StateContext } from "../../../context/StateProvider";

export const useStateContext = () => {
  return useContext(StateContext);
};
