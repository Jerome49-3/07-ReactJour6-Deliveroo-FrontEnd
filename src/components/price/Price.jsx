import { useLayoutEffect, useState } from "react";
const Price = ({ repas }) => {
  const [price, setPrice] = useState();

  useLayoutEffect(() => {
    setPrice(repas?.price);
  }, [repas]);

  return <span>{price}</span>;
};

export default Price;
