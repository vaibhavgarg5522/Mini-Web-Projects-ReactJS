import TodoApp from "./components/todos/TodoApp"
import Navbar from "./components/navbar/Navbar"
import ContactManager from "./components/contactmanager/ContactManager"
import ContactList from "./components/contactlist/ContactList"
import { useState } from "react"

function App() {

  const [contact, setContact] = useState([]);

  const addContact =(data)=>{
   setContact([...contact,data])
  }
  

  return (
    <>
    <Navbar></Navbar>
     <TodoApp></TodoApp>
     <ContactManager addContact={addContact}></ContactManager>
     <ContactList contact={contact}></ContactList>
    </>
  )
}

export default App
