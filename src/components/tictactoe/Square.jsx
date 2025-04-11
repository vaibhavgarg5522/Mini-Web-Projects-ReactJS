import React from 'react';

const Square = (props) => {
  const { value, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="flex border-2 m-2 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] items-center justify-center bg-indigo-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer rounded-md shadow-md transition-all duration-200"
    >
      <button className="w-full h-full">{value}</button>
    </div>
  );
};

export default Square;
