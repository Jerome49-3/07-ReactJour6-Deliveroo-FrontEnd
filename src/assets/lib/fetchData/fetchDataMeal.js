const fetchDataMeal = async (axios, setData, setIsLoading) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_URL}/getRestaurant`
    );
    if (response) {
      // console.log("reponse in fetchDataMeal:", response);
      setData(response.data[0]);
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
  }
};
export default fetchDataMeal;
