// const handleAddQuantity = async (e, axios, id, setQuantity) => {
//   e.preventDefault();
//   try {
//     const response = await axios.put(
//       `${import.meta.env.VITE_REACT_APP_URL}/addQuantity/${id}`
//     );
//     if (response) {
//       setQuantity(response?.data?.quantity);
//       console.log(
//         "%cresponse in handleAddQuantity:",
//         "color: magenta",
//         response
//       );
//     }
//   } catch (error) {
//     console.error("%cerror in handleAddQuantity:", "color: red", error);
//     console.log("%cerror in handleAddQuantity:", "color: red", error);
//   }
// };
// export default handleAddQuantity;
