import React from 'react'
import { useState, useEffect } from 'react'


const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [randomNumber, setRandomNumber] = useState("")
  const [answer, setAnswer] = useState("")

  console.log(userNumber)
  console.log(randomNumber)

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10)) 
    setAnswer("")
  }

  useEffect( () => {
    generateNumber()
  },[])

  const guessing = (e) =>{
    e.preventDefault()
    if(userNumber == randomNumber){
      setAnswer("vyhral jsi")
    }else{
      setAnswer("zkus jine cislo")
    }
  }

  const showAnswer = () => {
    let answerNumber = document.getElementById('answerNumber')
    if(answerNumber.style.display == "block"){
      answerNumber.style.display = "none"
    }else{
      answerNumber.style.display = "block"
    }
  }
  
  return (
    <div className="game-container">
      <h1 className="main-text" id="text">Guess the number</h1>
      <p className="answer-number" id="answerNumber">{randomNumber}</p>
      <button className="btn" onClick={showAnswer}>Show the number</button>
      <form className="form" onSubmit={guessing}>
        <input className="input" type="number" onChange={ (e) => {setUserNumber(e.target.value)} } />
        <input className="btn" value="Tipnout" type="submit"/>
      </form>
      <button className="btn" onClick={generateNumber}>new number</button>
      <h1>{answer}</h1>
    </div>
  )
}

export default App