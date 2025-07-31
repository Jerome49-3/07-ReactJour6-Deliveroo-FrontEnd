const handleAddCaddy = (e, axios, nameCategory, menus, dispatch) => {
  try {
    e.preventDefault();
    console.group("log in handleAddCaddy:");
    console.log("%cmenus:", "color: magenta", menus);
    console.log("%cnameCategory:", "color: magenta", nameCategory);
    console.trace();
    console.groupEnd;
    dispatch({
      type: "addedPanier",
      newPanier: {
        idMeal: menus.id,
        title: menus.title,
        price: menus.price,
        quantity: menus.quantity === 0 ? 1 : menus.quantity,
        categories: nameCategory,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
export default handleAddCaddy;
