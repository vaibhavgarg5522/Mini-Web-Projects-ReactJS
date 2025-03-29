import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoApp = () => {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    if (activity.trim() !== '') {
      setListData([...listData, activity]);
      setActivity('');
    }
  };

  const editActivity = (index) => {
    const newActivity = prompt('Edit activity:', listData[index]);
    if (newActivity !== null && newActivity.trim() !== '') {
      const updatedList = [...listData];
      updatedList[index] = newActivity;
      setListData(updatedList);
    }
  };

  const removeActivity = (index) => {
    const updatedList = listData.filter((_, i) => i !== index);
    setListData(updatedList);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#00B9B3] to-[#1591EA]">
      <div className="w-[450px] h-[540px] text-black bg-indigo-50 p-9">
        <p className="text-3xl">Todo App</p>
        <div className="mt-4 text-xl">
          <div className="flex items-center">
            <input
              className="border px-1 py-1 w-[320px]"
              placeholder="Add your new todo"
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <button onClick={addActivity} className="ml-2">
              <AddIcon
                sx={{
                  color: 'white',
                  fontSize: '34px',
                  bgcolor: '#7F00FF',
                  borderRadius: '4px',
                  padding: '4px',
                }}
              />
            </button>
          </div>
          <div className="mt-4">
            {listData.length > 0 && (
              <ul>
                {listData.map((item, index) => (
                  <li key={index} className="flex items-center justify-between mb-[33px]">
                    <span>{item}</span>
                    <div className="flex space-x-2">
                      <button onClick={() => editActivity(index)}>
                        <EditIcon
                          sx={{
                            color: 'white',
                            fontSize: '35px',
                            bgcolor: '#7F00FF',
                            borderRadius: '4px',
                            padding: '4px',
                          }}
                        />
                      </button>
                      <button onClick={() => removeActivity(index)}>
                        <DeleteIcon
                          sx={{
                            color: 'white',
                            fontSize: '35px',
                            bgcolor: 'red',
                            borderRadius: '4px',
                            padding: '4px',
                          }}
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {listData.length > 1 && (
              <button
                onClick={() => setListData([])}
                className="border bg-[#7F00FF] rounded px-3 py-2 mt-5 text-white"
              >
                Delete All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;