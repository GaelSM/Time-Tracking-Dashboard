import User from './components/User'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import dataJson from './data.json'
import './App.css'

function App() {

  const [data, setData] = useState([])
  const [typeData, setTypeData] = useState("weekly")

  const handleClick = (e) => {
    setTypeData(e.target.textContent.toLowerCase())
    document.querySelectorAll(".user-container__body h3").forEach(element => {
      element.classList.remove("is-selected")
    })
    document.querySelectorAll(".information").forEach(element => {
      element.style.margin = "0 0 0 -200%"
      setTimeout(()=> {
        element.style.margin = "0"
      }, 300)
    })
    e.target.classList.add("is-selected")
  }
  
  useEffect(() => {
    document.querySelectorAll(".user-container__body h3")[1].classList.add("is-selected")
    setData(dataJson)
  },[])


  return (
    <main className="container">
      <User handleClick={handleClick}/>
      <section className="cards-container">
        {
          data.map(({title, timeframes}) => <Card key={title} data={timeframes} type={title} select={typeData}/>)
        }
      </section>
    </main>
  )
}

export default App
