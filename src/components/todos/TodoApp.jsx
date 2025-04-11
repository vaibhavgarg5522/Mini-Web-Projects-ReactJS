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
    <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-b from-[#00B9B3] to-[#1591EA] p-4">
      <div className="w-full max-w-[450px] h-auto sm:h-[540px] text-black bg-indigo-50 p-6 sm:p-9 rounded-xl shadow-lg">
        <p className="text-2xl sm:text-3xl font-semibold text-center">Todo App</p>
        <div className="mt-4 text-lg sm:text-xl">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <input
              className="border px-2 py-2 w-full sm:w-[320px] text-base rounded mb-2 sm:mb-0"
              placeholder="Add your new todo"
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <button onClick={addActivity} className="sm:ml-2 w-fit self-end sm:self-auto">
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
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2"
                  >
                    <span className="text-base break-words">{item}</span>
                    <div className="flex space-x-2 self-end sm:self-auto">
                      <button onClick={() => editActivity(index)}>
                        <EditIcon
                          sx={{
                            color: 'white',
                            fontSize: '30px',
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
                            fontSize: '30px',
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
                className="border bg-[#7F00FF] rounded px-3 py-2 mt-5 text-white w-full sm:w-auto"
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
