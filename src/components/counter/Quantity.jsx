/* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
// import handleRemoveQuantity from "../../assets/lib/handleClick/handleRemoveQuantity";
// import handleAddQuantity from "../../assets/lib/handleClick/handleAddQuantity";
import { useEffect } from "react";

const Quantity = ({ elPanier, state, dispatch, index }) => {
  const idMeal = elPanier?.idMeal;
  // console.log("%cidMeal on Quantity:", "color: yellow", idMeal);
  console.log("%cstate on Quantity:", "color: yellow", state);
  console.log("%cstate[index] on Quantity:", "color: yellow", state[index]);
  console.log("%celPanier on Quantity:", "color: yellow", elPanier);
  console.log(
    "%celPanier.quantity on Quantity:",
    "color: yellow",
    elPanier?.quantity
  );
  const defaultPrice = Number(elPanier?.defaultPrice) * 100;
  // console.log("%cdefaultPrice:", "color: yellow", defaultPrice);
  // console.log("%ctypeof defaultPrice:", "color: yellow", typeof defaultPrice);
  // const elPanierQuantity = elPanier?.quantity;
  // console.log("%celPanierQuantity:", "color: yellow", elPanierQuantity);

  useEffect(() => {
    if (state[index]?.quantity === 0) {
      dispatch({
        type: "removePanier",
        elPanierId: idMeal,
      });
    }
    if (state[index]?.quantity === 10) {
      dispatch({ type: "quantityIsOverTen", elPanierId: idMeal });
    }
  }, [state]);

  return (
    <div className="boxQuantity">
      {state[index]?.quantity <= 0 ? (
        <div className="btnHide"></div>
      ) : (
        <button
          className="show"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "removedQuantity",
              elPanierId: idMeal,
              index: index,
              defaultPrice: defaultPrice,
            });
          }}
        >
          <p>-</p>
        </button>
      )}

      <p
        className={
          state[index]?.quantity === 0 || state[index]?.quantity > 9
            ? "red"
            : "black"
        }
      >
        {state[index]?.quantity}
      </p>
      {state[index]?.quantity > 9 ? (
        <div className="btnHide"></div>
      ) : (
        <button
          className="show"
          onClick={(e) => {
            e.preventDefault();
            console.group("log dipatch");
            console.trace();
            console.groupEnd();
            dispatch({
              type: "addedQuantity",
              elPanierId: idMeal,
              index: index,
              defaultPrice: defaultPrice,
            });
          }}
        >
          <p>+</p>
        </button>
      )}
    </div>
  );
};

export default Quantity;
