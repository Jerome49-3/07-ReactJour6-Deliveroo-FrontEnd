// import axios from "axios";
// import handleRemoveQuantity from "../../assets/lib/handleClick/handleRemoveQuantity";
// import handleAddQuantity from "../../assets/lib/handleClick/handleAddQuantity";
import { useEffect, useReducer } from "react";
import QuantityReducer from "../../store/QuantityReducer";
import suppElCaddy from "../../assets/lib/handleClick/suppElCaddy";

const Quantity = ({ panier, setPanier, elPanier }) => {
  const id = elPanier?.idMeal;
  console.log("%cid:", "color: yellow", id);
  // const elPanierQuantity = elPanier?.quantity;
  // console.log("%celPanierQuantity:", "color: yellow", elPanierQuantity);
  const [state, dispatch] = useReducer(QuantityReducer, { quantity: 1 });

  // console.log("%cQuantity:", "color: yellow", quantity);
  useEffect(() => {
    if (state.quantity === 0) {
      suppElCaddy(panier, setPanier, elPanier);
    }
  }, [state.quantity]);

  return (
    <div className="boxQuantity">
      {state.quantity <= 0 ? (
        <div className="btnHide"></div>
      ) : (
        <button
          className="show"
          onClick={() => {
            dispatch({ type: "deleted" });
          }}
        >
          <p>-</p>
        </button>
      )}

      <p
        className={state.quantity === 0 || state.quantity > 9 ? "red" : "black"}
      >
        {state.quantity}
      </p>
      {state.quantity > 9 ? (
        <div className="btnHide"></div>
      ) : (
        <button
          className="show"
          onClick={() => {
            dispatch({ type: "added" });
          }}
        >
          <p>+</p>
        </button>
      )}
    </div>
  );
};

export default Quantity;
