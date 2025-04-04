import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {

const {contact,removeHandle}=props;
const updatedContact = contact.map((item)=>{
  return <div className='bg-[#e5e1da] text-2xl flex justify-between items-center gap-x-[145px]'>
    <p className='text-2xl'>{item.data.name}</p>
    <p className='text-2xl'>{item.data.email}</p>
    <span className='cursor-pointer' onClick={()=>removeHandle(item.id)}> 
      <DeleteIcon sx={{color:"red",bgcolor:"black",
      width:"35px",
      height:"40px"
    }}></DeleteIcon> 
    </span> 
  </div>
})

  return (
    <div>
   {updatedContact}
    </div>
  )
}

export default ContactList