const handleAddCaddy = (e, axios, panier, nameCategory, menus, setPanier) => {
  console.log(
    "%cnameCategory on handleAddCaddy:",
    "color: magenta",
    nameCategory
  );
  console.log("%cPanier in handleAddCaddy:", "color: magenta", panier);
  try {
    e.preventDefault();
    console.log("%cmenus on click:", "color: magenta", menus);
    // je crée un clone tu state array panier
    const panierClone = [...panier];
    //je crée un object newPanier avec les infos utiles id, title et price
    const newPanier = {
      idMeal: menus.id,
      title: menus.title,
      price: menus.price,
      quantity: panierClone.length === 0 ? 1 : menus.quantity,
      categories: nameCategory,
    };
    console.log("%cnewPanier:", "color: magenta", newPanier);
    //je push l'object dans le clone de panier
    //je crée un tableau filtré de panierclone qui rejete les object en doublons ayant le meme id
    const validObjPaner = panierClone.some((el) => {
      // console.log("%cel:", "color: red", el);
      // console.log("%cnewPanier.idMeal:", "color: red", newPanier.idMeal);
      return el.idMeal === newPanier.idMeal;
    });
    console.log("%cvalidObjPaner:", "color: magenta", validObjPaner);
    if (!validObjPaner) {
      panierClone.push(newPanier);
      // try {
      //   const response = axios.post(
      //     `${import.meta.env.VITE_REACT_APP_URL}/addCaddy`,
      //     {
      //       idMeal: newPanier.id,
      //       title: newPanier.title,
      //       price: newPanier.price,
      //       quantity: newPanier.quantity,
      //       categories: newPanier.nameCategory,
      //     }
      //   );
      //   if (response) {
      //     console.log("response on handleAddCaddy:", response);
      //   }
      // } catch (error) {
      //   console.log("error after response on handleAddCaddy:", error);
      // }
    }
    //je met le state a jour avec le tableau filterpaner
    setPanier(panierClone);
    localStorage.setItem("CaddyDeliveroo", JSON.stringify(panierClone));
  } catch (error) {
    console.error(error);
  }
};
export default handleAddCaddy;
