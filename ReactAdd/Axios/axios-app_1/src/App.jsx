import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from './axios'

function App() {
  const [mydata, setMyData] = useState([])
  const [isError  , setError] = useState("")

  const API = "https://jsonplaceholder.typicode.com"

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/poss')
  //   .then((res) => setMyData(res.data))
  //   .catch((error) => setError(error.message))
  // } ,[])

  // const getApiData = async() => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //   setMyData(res.data)
  // }

  // const getApiData = async(url) => {
  //   try{
  //     const res = await axios.get(url)
  //     setMyData(res.data)
  //   }
  //   catch(error){
  //     setError(error.message)
  //   }
  // }

  // useEffect(() => {
  //   getApiData(`${API}/posts`);
  // } , [])


    const getApiData = async() => {
    try{
      const res = await axios.get("/posts")
      setMyData(res.data)
    }
    catch(error){
      setError(error.message)
    }
  }

  useEffect(() => {
    getApiData();
  } , [])


  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError != "" && <h2>{isError}</h2>}
      {
        mydata.slice(0 , 12).map((post) => {
          const {id , title , body} = post;
          return <div className='card' key={id}>
            <h2>{title.slice(0 , 10).toUpperCase()}</h2>
            <p>{body.slice(0 , 20)}</p>
          </div>
        })
      }
    </>
  )
}

export default App
