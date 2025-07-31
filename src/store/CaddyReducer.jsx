export default function CaddyReducer(state, action) {
  console.log("%cstate in caddyReducer:", "color: green", state);
  console.trace(
    "%cstate console.trace in caddyReducer:",
    "color: green",
    state
  );
  console.log("%caction in caddyReducer:", "color: blue", action);
  const index = action.index;
  const middleSlice = index + 1;
  const endSlice = state.length;
  const defaultPrice = action.defaultPrice;
  const newPrice = action?.newPrice;

  switch (action.type) {
    case "addedQuantity": {
      const newSlice = [
        ...state.slice(0, index),
        ...state
          .map((newEl) => {
            const newQuantity = newEl.quantity + 1;
            console.log(
              "%cnewQuantity in addedQuantity:",
              "color: green",
              newQuantity
            );
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
              console.log(
                "%caction.elPanierId on if in addedQuantity:",
                "color: orange",
                action.elPanierId
              );

              return {
                ...newEl,
                quantity: newEl.quantity + 1,
                newPrice: defaultPrice * newQuantity,
              };
            }
          })
          .filter((el) => el),
        ...state.slice(middleSlice, endSlice),
      ];
      console.log("newSlice in addedQuantity:", newSlice);
      return newSlice;
    }
    case "removedQuantity": {
      const newSlice = [
        ...state.slice(0, index),
        ...state
          .map((newEl) => {
            console.log("%cnewEl in removedQuantity:", "color: green", newEl);
            console.log(
              "%cnewEl.idMeal in removedQuantity:",
              "color: green",
              newEl.idMeal
            );
            console.log(
              "%caction.elPanierId in removedQuantity:",
              "color: green",
              action.elPanierId
            );
            if (newEl.idMeal === action.elPanierId) {
              console.log(
                "%caction.elPanierId on if in removedQuantity:",
                "color: orange",
                action.elPanierId
              );
              return {
                ...newEl,
                quantity: newEl.quantity - 1,
                newPrice: newPrice - defaultPrice,
              };
            }
          })
          .filter((el) => el),
        ...state.slice(middleSlice, endSlice),
      ];
      console.log("newSlice in removedQuantity:", newSlice);
      return newSlice;
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
