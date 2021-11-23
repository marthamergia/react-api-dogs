import { React, useEffect, useState} from "react";
import "./App.css"


function App() {
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.thedogapi.com/v1/images/search")
      const newData = await response.json()
      // console.log(newData)
      setDogs(newData)
    }
    fetchData()
  }, [])
  console.log(dogs)
  return (
    <div className="">
      {dogs.map((taco) => {
        const{id, breeds, url} = taco
        
        return(
          <div key={id}>
          <h2>The Dog List</h2>
          <h3>Name: {breeds}</h3>
          {/* <h3>Height: {height}</h3> */}
          <img src={url} alt={breeds} />
          <h3></h3>
          </div>

        )
      })}
      
    </div>
  )
}
export default App