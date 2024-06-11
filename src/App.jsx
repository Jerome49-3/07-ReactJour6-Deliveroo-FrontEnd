
import './assets/css/App.css'
import Header from './components/header/Header'
import Logo from './assets/images/logo-teal.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './components/loading/Loading'
import Main from './components/main/Main'

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://site--backend-deliveroo--s4qnmrl7fg46.code.run/'
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log('data:', data)
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header classHeader='header' classWrapper='wrapper' src={Logo} classImg='imgHeader' />
      <Main data={data} classMain='wrapper banner' classTxt='titleOne' />
    </>
  )
}

export default App
