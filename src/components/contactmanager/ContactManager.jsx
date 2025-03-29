import React, { useState } from 'react'
import img1 from '../../../public/vaibhav.jpeg.jpg'


const ContactManager = (props) => {
  const {addContact,contact} = props;


const [contactData,setContactData] = useState({name:"",email:""})
// const [contact,setContact]= useState()


const handleChange = (e) => {
  setContactData((prevData) => (
    {...prevData,[e.target.name]: e.target.value,}
    ));
};

const handleAdd = ()=>{
  if(contactData.name === "" || contactData.email === ""){
    alert("please fill all the detail")
  }
  addContact(contactData)
  setContactData({name:"",email:""})
}

  return (
    <div className='flex flex-col items-center  justify-center w-full h-[100vh] bg-[#B4AB9F]'>
      <h1 className='text-4xl mb-13'> Contact Manager</h1>
    <div className='flex justify-between bg-[#e3dcd1] w-[780px] h-[456px]'>
      {/* {---------first child div[1]---------} */}
      <div>
        <img className='w-[320px] h-[456px]' src={img1} alt="" />
      </div>

       {/* {---------first child div[2]---------} */}
      <div className='flex flex-col justify-center gap-[46px] mb-[75px]'>
      <div><p className='text-[#7b7266] font-xl'>Name </p>
      <p className='text-[#796f63] font-xl'>Email </p></div>
      </div>

       {/* {---------first child div[3]---------} */}
      <div className='flex flex-col justify-center gap-6 m-9 '>
        <input onChange={handleChange} className='border rounded py-[6px] px-[4px]' type="text" name='name' placeholder='Enter Name' value={contactData.name} />
        <input onChange={handleChange} className='border rounded py-[6px] px-[4px]' type="email" name="email" placeholder='Enter Email' value={contactData.email}/>
        <button onClick={handleAdd} className='border bg-[#a49b8f] rounded-2xl py-[6px] text-white hover:bg-[#65615b]'>Add Contact</button>
      </div>
      
    </div>
    </div>
  )
}

export default ContactManager