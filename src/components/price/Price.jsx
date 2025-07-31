import { useLayoutEffect, useState } from "react";
const Price = ({ elPanier }) => {
  // console.log("%celPanier in price:", "color: orange", elPanier);
  // const defaultPrice = elPanier?.defaultPrice;
  // const newPrice = elPanier?.newPrice;
  const [price, setPrice] = useState();

  useLayoutEffect(() => {
    setPrice(elPanier?.defaultPrice);
  }, [elPanier]);

  return <span>{price}</span>;
};

export default Price;
