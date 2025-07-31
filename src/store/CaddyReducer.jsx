export default function CaddyReducer(state, action) {
  console.log("%cstate in caddyReducer:", "color: green", state);
  console.trace(
    "%cstate console.trace in caddyReducer:",
    "color: green",
    state
  );
  console.log("%caction in caddyReducer:", "color: blue", action);

  switch (action.type) {
    case "addedQuantity": {
      const newState = [...state];
      const newArr = newState.map((newEl) => {
        console.log("%cnewEl in addedQuantity:", "color: green", newEl);
        console.log(
          "%cnewEl.idMeal in addedQuantity:",
          "color: green",
          newEl.idMeal
        );
        console.log(
          "%caction.elPanierId in addedQuantity:",
          "color: green",
          action.elPanierId
        );
        if (newEl.idMeal === action.elPanierId) {
          return {
            ...newEl,
            quantity: newEl.quantity + 1,
          };
        }
      });
      console.log("newArr in addedQuantity:", newArr);
      return newArr;
    }
    case "removedQuantity": {
      const newState = [...state];
      const newArr = newState.map((newEl) => {
        console.log("%cnewEl in removedQuantity:", "color: red", newEl);
        console.log(
          "%cnewEl.idMeal in removedQuantity:",
          "color: red",
          newEl.idMeal
        );
        console.log(
          "%caction.elPanierId in removedQuantity:",
          "color: red",
          action.elPanierId
        );
        if (newEl.idMeal === action.elPanierId) {
          return {
            ...newEl,
            quantity: newEl.quantity - 1,
          };
        }
      });
      console.log("newArr in addedQuantity:", newArr);
      return newArr;
    }
    case "quantityIsOverTen": {
      const newState = [...state];
      const newArr = newState.map((newEl) => {
        console.log("%cnewEl in quantityIsOverTen:", "color: green", newEl);
        console.log(
          "%cnewEl.idMeal in quantityIsOverTen:",
          "color: green",
          newEl.idMeal
        );
        console.log(
          "%caction.elPanierId in quantityIsOverTen:",
          "color: green",
          action.elPanierId
        );
        if (newEl.idMeal === action.elPanierId) {
          return {
            ...newEl,
            message: (newEl.message = "La quantité maximum est de 10"),
            quantity: (newEl.quantity = 10),
          };
        }
      });
      console.log("newArr in quantityIsOverTen:", newArr);
      return newArr;
    }
    case "addedPanier": {
      const verifId = state.some((el) => {
        // console.log("%cel:", "color: red", el);
        // console.log("%cnewPanier.idMeal:", "color: red", newPanier.idMeal);
        return el.idMeal === action.newPanier.idMeal;
      });
      if (verifId) {
        return state;
      } else {
        return [...state, action.newPanier];
      }
    }
    case "removePanier": {
      const suppObjPanier = state.filter((el) => {
        console.log("%cel in suppElCandy:", "color: brown", el);
        return el.idMeal !== action.elPanierId;
      });
      console.log("suppObjPanier in CaddyReducer:", suppObjPanier);

      return suppObjPanier;
    }
    case "addedResponsePanier": {
      return action.panier;
    }
  }
  throw Error("unknow action" + action.type);
}
