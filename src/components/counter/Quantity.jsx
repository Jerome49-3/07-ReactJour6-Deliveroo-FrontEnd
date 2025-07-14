import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  console.log("%cQuantity:", "color: yellow", quantity);
  return (
    <div className="boxQuantity">
      {quantity <= 0 ? (
        <div className="btnHide"></div>
      ) : (
        <button className="show" onClick={() => setQuantity(quantity - 1)}>
          <p>-</p>
        </button>
      )}

      <p className={quantity === 0 || quantity > 9 ? "red" : "black"}>
        {quantity}
      </p>
      {quantity > 9 ? (
        <div className="btnHide"></div>
      ) : (
        <button className="show" onClick={() => setQuantity(quantity + 1)}>
          <p>+</p>
        </button>
      )}
    </div>
  );
};

export default Quantity;
