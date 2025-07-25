export default function QuantityReducer(state, action) {
  console.log("%cstate in QuantityReducer:", "color: green", state);

  switch (action.type) {
    case "added": {
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    }
    case "deleted": {
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    }
  }
  throw Error("unknow action" + action.type);
}
