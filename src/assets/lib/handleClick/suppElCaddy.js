const suppElCaddy = (panier, setPanier, elPanier) => {
  console.log("%celPanier in suppElCandy:", "color: brown", elPanier);
  try {
    const panierClone = [...panier];
    const suppObjPanier = panierClone.filter((el) => {
      console.log("%cel in suppElCandy:", "color: brown", el);
      return el.idMeal !== elPanier.idMeal;
    });
    console.log("%csuppObjPanier on click:", "color: magenta", suppObjPanier);
    setPanier(suppObjPanier);
    localStorage.setItem("CaddyDeliveroo", JSON.stringify(suppObjPanier));
  } catch (error) {
    console.error(error);
  }
};
export default suppElCaddy;
