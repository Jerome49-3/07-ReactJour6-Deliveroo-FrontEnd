/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useEffect, useState } from "react";

const SubtotalAndTotal = ({ state, dispatch }) => {
  console.log("state in SubtotalAndTotal:", state);
  //
  // console.log("defaultPrice in SubtotalAndTotal:", defaultPrice);
  // console.log("typeof defaultPrice in SubtotalAndTotal:", typeof defaultPrice);
  // const newPrice = elPanier?.newPrice * 100;
  // console.log("newPrice in SubtotalAndTotal:", newPrice);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const deliveryCost = 280;
  console.log("subtotal in SubtotalAndTotal:", subTotal);
  let newSubtotal = 0;
  useEffect(() => {
    newSubtotal = 0;
  }, []);
  console.log("newSubtotal in SubtotalAndTotal:", newSubtotal);

  useLayoutEffect(() => {
    if (state.length === 0) {
      setSubTotal(newSubtotal);
    } else {
      state.forEach((el) => {
        const defaultPrice = el?.defaultPrice * 100;
        const newPrice = el?.newPrice;
        console.log("%cel forEach in subTotalAndTotal:", "color: brown", el);
        if (el?.quantity > 1) {
          newSubtotal = newSubtotal + newPrice;
          setSubTotal(newSubtotal);
          setTotal(newSubtotal + deliveryCost);
        } else {
          newSubtotal = newSubtotal + defaultPrice;
          setSubTotal(newSubtotal);
          setTotal(newSubtotal + deliveryCost);
        }
      });
    }
  }, [state]);

  return (
    <div className="boxSubTotalAndTotal">
      {subTotal && (
        <div className="boxSubTotal">
          <div>Sous total:</div>
          <div>{(subTotal / 100).toFixed(2)} €</div>
        </div>
      )}
      <div className="boxDeliveryCost">
        <div>Frais de livraison:</div>
        <div>{(deliveryCost / 100).toFixed(2)} €</div>
      </div>
      <div className="line"></div>
      <div className="boxTotal">
        <div>Total:</div>
        <div>{(total / 100).toFixed(2)} €</div>
      </div>
    </div>
  );
};

export default SubtotalAndTotal;
