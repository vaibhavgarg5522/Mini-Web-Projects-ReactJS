import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {
  const { contact, removeHandle } = props;

  return (
    <div className="w-full max-w-[800px] mx-auto mt-8 space-y-4 px-4">
      {contact.map((item) => (
        <div
          key={item.id}
          className="bg-[#e5e1da] p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-x-10"
        >
          <p className="text-lg md:text-xl font-medium text-gray-800">
            {item.data.name}
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-700">
            {item.data.email}
          </p>
          <span
            className="cursor-pointer self-end md:self-center"
            onClick={() => removeHandle(item.id)}
          >
            <DeleteIcon
              sx={{
                color: 'red',
                bgcolor: 'black',
                width: '32px',
                height: '36px',
                borderRadius: '8px',
              }}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
