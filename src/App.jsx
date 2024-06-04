import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <h1>vite + react</h1>
      <h2>About:</h2>
      <Dynamically name= "mobile" price="36,00" used="Five Month"></Dynamically>
      <Dynamically name= "laptop" price="50,00" used="Two Month" ></Dynamically>
      <Dynamically name= "watch" price="22,00" used="New"></Dynamically>

     
      <Person></Person>
      <Student grade="10" score="98" sub="Science"></Student>
      <Student grade="11" score="78" sub="Commerce"></Student>
      <Student grade="12" score="99" sub="Arts"></Student>
      <AnotherCss></AnotherCss>
      
    </>
  )
}
function Dynamically(props){
  const css = {
    border: "2px solid sky",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px"
  }
  return (
    <div style={css}>
      <h3>
        Devices: {props.name}, 
        <br /> 
        Price: {props.price}, 
        <br />
        Used: {props.used},
       </h3>
    </div>
  )
}

function Person (){
  
  let age = 25;
  let name = 'Imran Sirajee';
  const details = {job : "web developer", experience : "4 years", some_details : " and i love to play cricket." }  
  return <h3>Hi there, i am {name}.I am {age} years old.I am a {details.job}. I have {details.experience} {details.some_details} </h3>
}
function Student({grade, score, sub}){
  console.log(grade)
  return (  
  <div className='student'>
    <h2>i am a student</h2>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
    <p>Subject: {sub}</p>
  </div>

)
          
}

function AnotherCss(){
  const css = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px',
  }
  return (
   <div style={css}>
     <h1>Hello Developers..</h1>
    <p>Hows the jossshh!!</p>
   </div>
  )
}

export default App
