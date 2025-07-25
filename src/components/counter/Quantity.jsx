// import axios from "axios";
// import handleRemoveQuantity from "../../assets/lib/handleClick/handleRemoveQuantity";
// import handleAddQuantity from "../../assets/lib/handleClick/handleAddQuantity";
import { useReducer } from "react";
import QuantityReducer from "../../store/QuantityReducer";

const Quantity = ({ elPanierId, elPanierQuantity }) => {
  console.log("%celPanierQuantity:", "color: yellow", elPanierQuantity);
  const id = elPanierId;
  console.log("%cid:", "color: yellow", id);
  const [state, dispatch] = useReducer(QuantityReducer, { quantity: 1 });
  // console.log("%cQuantity:", "color: yellow", quantity);

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
