import React, { useState } from 'react';
import img1 from '../../../public/vaibhav.jpeg.jpg';

const ContactManager = (props) => {
  const { addContact } = props;
  const [contactData, setContactData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setContactData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdd = () => {
    if (contactData.name === '' || contactData.email === '') {
      alert('Please fill all the details');
      return;
    }
    addContact(contactData);
    setContactData({ name: '', email: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#B4AB9F] px-4">
      <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-white">Contact Manager</h1>

      <div className="flex flex-col lg:flex-row bg-[#e3dcd1] w-full max-w-[780px] rounded-xl overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="w-full sm:h-[280px] lg:w-[320px] lg:h-[456px]">
          <img
            className="w-full h-full object-cover rounded-t-xl lg:rounded-t-none lg:rounded-l-xl"
            src={img1}
            alt="Contact"
          />
        </div>

        {/* Label Section */}
        <div className="hidden lg:flex flex-col justify-center">
          <div className="flex flex-col gap-12 mb-[60px] ml-[95px] text-[#7b7266] text-lg">
            <p>Name</p>
            <p>Email</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="flex flex-col justify-center gap-6 p-6 w-full">
          <input
            onChange={handleChange}
            className="border rounded py-2 px-3"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={contactData.name}
          />
          <input
            onChange={handleChange}
            className="border rounded py-2 px-3"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={contactData.email}
          />
          <button
            onClick={handleAdd}
            className="border bg-[#a49b8f] rounded-2xl py-2 text-white hover:bg-[#65615b] transition-all duration-300"
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactManager;
