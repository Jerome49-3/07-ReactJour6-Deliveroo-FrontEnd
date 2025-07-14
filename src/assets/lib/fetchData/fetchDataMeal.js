const fetchDataMeal = async (axios, setData, setIsLoading) => {
  try {
    const response = await axios.get(
      "https://site--backend-deliveroo--s4qnmrl7fg46.code.run/"
    );
    if (response) {
      setData(response.data);
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
  }
};
export default fetchDataMeal;
