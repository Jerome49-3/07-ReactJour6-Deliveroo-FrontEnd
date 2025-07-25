import { useLayoutEffect, useState } from "react";
const Price = ({ elPanier }) => {
  console.log("%celPanier:", "color: orange", elPanier);

  const [price, setPrice] = useState();

  useLayoutEffect(() => {
    setPrice(elPanier?.price);
  }, [elPanier]);

  return <span>{price}</span>;
};

export default Price;
