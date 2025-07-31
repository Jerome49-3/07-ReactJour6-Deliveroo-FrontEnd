/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const Quantity = ({ elPanier, dispatch, index }) => {
  const idMeal = elPanier?.idMeal;
  // console.log("%cidMeal on Quantity:", "color: yellow", idMeal);
  // console.log("%cstate on Quantity:", "color: yellow", state);
  // console.log("%cstate[index] on Quantity:", "color: yellow", state[index]);
  // console.log("%celPanier on Quantity:", "color: yellow", elPanier);
  // console.log(
  //   "%celPanier.quantity on Quantity:",
  //   "color: yellow",
  //   elPanier?.quantity
  // );
  const defaultPrice = Number(elPanier?.defaultPrice) * 100;
  const newPrice = elPanier?.newPrice;
  console.log("%cnewPrice in quantity:", "color: yellow", defaultPrice);
  console.log("%cnewPrice in quantity:", "color: yellow", newPrice);
  // console.log("%ctypeof defaultPrice:", "color: yellow", typeof defaultPrice);
  // const elPanierQuantity = elPanier?.quantity;
  // console.log("%celPanierQuantity:", "color: yellow", elPanierQuantity);

  useEffect(() => {
    if (elPanier?.quantity === 0) {
      dispatch({
        type: "removePanier",
        elPanierId: idMeal,
      });
    }
  }, [elPanier?.quantity]);

  return (
    <div className="boxQuantity">
      {elPanier?.quantity <= 0 ? (
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
              newPrice: newPrice,
            });
          }}
        >
          <p>-</p>
        </button>
      )}

      <p
        className={
          elPanier?.quantity === 0 || elPanier?.quantity > 9 ? "red" : "black"
        }
      >
        {elPanier?.quantity}
      </p>
      {elPanier?.quantity > 9 ? (
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
