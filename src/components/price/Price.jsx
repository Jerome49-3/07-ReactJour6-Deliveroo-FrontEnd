import { useLayoutEffect, useState } from "react";
const Price = ({ elPanier }) => {
  // console.log("%celPanier in price:", "color: orange", elPanier);
  // const defaultPrice = elPanier?.defaultPrice;
  // const newPrice = elPanier?.newPrice;
  const [price, setPrice] = useState();
  console.log("%cprice in price:", "color: pink", price);
  useLayoutEffect(() => {
    const newPrice = elPanier?.newPrice / 100;
    const defaultPrice = elPanier?.defaultPrice;
    setPrice(() => {
      if (newPrice) {
        return newPrice.toFixed(2);
      } else {
        return defaultPrice;
      }
    });
  }, [elPanier]);

  return <span className="price">{price} €</span>;
};

export default Price;
