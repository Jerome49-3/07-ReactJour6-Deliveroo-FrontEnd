const handleRemoveQuantity = async (e, axios, id, setQuantity) => {
  e.preventDefault();
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_REACT_APP_URL}/removeQuantity/${id}`
    );
    if (response) {
      setQuantity(response?.data?.quantity);
    }
  } catch (error) {
    console.log("error in handleRemoveQuantity:", error);
  }
};
export default handleRemoveQuantity;
