import TodoApp from "./components/todos/TodoApp"
import Navbar from "./components/navbar/Navbar"
import ContactManager from "./components/contactmanager/ContactManager"
import ContactList from "./components/contactlist/ContactList"
import { useEffect, useState } from "react"
import uuid4 from "uuid4"
import WeatherApp from "./components/weatherapp/WeatherApp"
import Calculator from "./components/calculator/Calculator"
import Timer from "./components/timer/Timer"
import TicTacToe from "./components/tictactoe/TicTacToe"

function App() {
  const localStorageKey = "contact"

  const [contact, setContact] = useState(()=>{
   return JSON.parse(localStorage.getItem(localStorageKey))
  || []});

  const addContact =(data)=>{
   setContact([...contact,{id:uuid4(),data}])
  }
  const removeHandle=(id)=>{
     const removeId = contact.filter((elem)=>{
      // console.log(elem.id)
      return elem.id !== id
     })
     setContact(removeId)
  }
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(contact))
  },[contact])

  return (
    <>
    <Navbar></Navbar>
     <TodoApp></TodoApp>
     <ContactManager addContact={addContact}></ContactManager>
     <ContactList contact={contact} removeHandle={removeHandle}></ContactList>
     <WeatherApp></WeatherApp>
     <Calculator></Calculator>
     <Timer></Timer>
     <TicTacToe></TicTacToe>
    </>
  )
}

export default App
