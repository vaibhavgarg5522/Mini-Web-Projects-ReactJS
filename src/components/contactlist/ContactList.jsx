import React from 'react'

const ContactList = (props) => {

const {contact}=props;
console.log(contact)
const updatedContact = contact.map((item)=>{
  return <div>
    <p>{item.name}</p>
    <p>{item.email}</p>
  </div>
})

  return (
    <div>
    {updatedContact}
    </div>
  )
}

export default ContactList