const handleAddCaddy = (e, panier, menus, setPanier) => {
  try {
    e.preventDefault();
    // console.log('menus on click:', menus);
    // je crée un clone tu state array panier
    const panierClone = [...panier];
    //je crée un object newPanier avec les infos utiles id, title et price
    const newPanier = {
      id: menus.id,
      title: menus.title,
      price: menus.price,
      quantity: menus.quantity,
    };
    console.log("newPanier:", newPanier);
    //je push l'object dans le clone de panier
    //je crée un tableau filtré de panierclone qui rejete les object en doublons ayant le meme id
    const validObjPaner = panierClone.some((el) => el.id === newPanier.id);
    if (!validObjPaner) {
      panierClone.push(newPanier);
    }
    // console.log("filterPaner:", filterPaner);
    //je met le state a jour avec le tableau filterpaner
    setPanier(panierClone);
    localStorage.setItem("CaddyDeliveroo", JSON.stringify(panierClone));
  } catch (error) {
    console.error(error);
  }
};
export default handleAddCaddy;
