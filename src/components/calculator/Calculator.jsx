import React, { useState } from 'react';

const Calculator = () => {
  const [data, setData] = useState('');

  const handleButton = (e) => {
    setData(data.concat(e.target.value));
  };

  const calculation = () => {
    try {
      setData(eval(data).toString());
    } catch {
      alert("Invalid Expression");
    }
  };

  const back = () => {
    setData(data.slice(0, -1));
  };

  const clear = () => {
    setData('');
  };

  return (
    <div className="bg-gradient-to-br from-orange-400 to-green-500 w-full min-h-screen flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mt-10 text-white">Calculator</h1>

      <div className="bg-black rounded-2xl w-full max-w-[560px] mt-8 p-6 shadow-lg">
        {/* Display Input */}
        <div className="flex justify-center mb-6">
          <input
            className="font-bold text-2xl border w-full bg-amber-50 h-12 rounded px-3 text-right"
            placeholder="0"
            type="text"
            readOnly
            value={data}
          />
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-4">
          {/* Row 1 */}
          <CalcBtn label="(" onClick={handleButton} />
          <CalcBtn label=")" onClick={handleButton} />
          <CalcBtn label="%" onClick={handleButton} />
          <CalcBtn label="AC" onClick={clear} color="bg-gray-600" />

          {/* Row 2 */}
          <CalcBtn label="7" onClick={handleButton} />
          <CalcBtn label="8" onClick={handleButton} />
          <CalcBtn label="9" onClick={handleButton} />
          <CalcBtn label="*" onClick={handleButton} />

          {/* Row 3 */}
          <CalcBtn label="4" onClick={handleButton} />
          <CalcBtn label="5" onClick={handleButton} />
          <CalcBtn label="6" onClick={handleButton} />
          <CalcBtn label="-" onClick={handleButton} />

          {/* Row 4 */}
          <CalcBtn label="1" onClick={handleButton} />
          <CalcBtn label="2" onClick={handleButton} />
          <CalcBtn label="3" onClick={handleButton} />
          <CalcBtn label="+" onClick={handleButton} />

          {/* Row 5 */}
          <CalcBtn label="0" onClick={handleButton} />
          <CalcBtn label="Back" onClick={back} color="bg-gray-600" />
          <CalcBtn label="=" onClick={calculation} />
          <CalcBtn label="/" onClick={handleButton} />
        </div>
      </div>
    </div>
  );
};

// Reusable Button Component
const CalcBtn = ({ label, onClick, color = "bg-green-700" }) => (
  <button
    value={label}
    onClick={onClick}
    className={`text-white font-semibold py-2 rounded hover:bg-black transition-all ${color}`}
  >
    {label}
  </button>
);

export default Calculator;
