const fetchCaddy = async (axios, dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_URL}/getCaddy`
    );
    if (response) {
      console.log("%cresponse in fetchCaddy:", "color: yellow", response);
      const panierIsArray = Array.isArray(response?.data?.panier);
      console.log(
        "%cpanierIsArray in fetchCaddy:",
        "color: yellow",
        panierIsArray
      );
      if (panierIsArray) {
        dispatch({
          type: "addedResponsePanier",
          panier: response?.data?.panier,
        });
        localStorage.setItem(
          "CaddyDeliveroo",
          JSON.stringify(response?.data?.panier)
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
};
export default fetchCaddy;
