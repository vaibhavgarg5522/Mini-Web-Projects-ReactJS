import React, { useState } from 'react'

const Calculator = () => {

  const [data,setData] = useState("")


const handleButton =(e)=>{
  setData(data.concat(e.target.value))
}

const calculation = ()=>{
  setData(eval(data).toString())
}

const back =()=>{
  setData(data.slice(0,-1))
}
const clear =()=>{
  setData("")
}


  return (
    <div className='bg-[linear-gradient(orange,green)] w-full h-[100vh] flex flex-col items-center'>
    <h1 className='text-4xl mt-[106px]'>Calculator</h1>

   <div className=' rounded-2xl bg-black w-[560px] h-[410px] mt-6'>
    <div className='flex justify-center'>
      <input className='font-bold  text-2xl border w-[490px] bg-amber-50 mt-[30px] h-9' placeholder='0' type="text" readOnly value={data}/>
    </div>
    <div className='grid grid-cols-4 mt-5 w-60px] ml-6'>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="(">(</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value=")">)</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="&">&</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-gray-600 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={clear}>AC</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="7">7</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="8">8</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="9">9</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="*">*</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="4">4</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="5">5</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="6">6</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="-">-</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="1">1</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="2">2</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-red-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="3">3</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="+">+</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="0">0</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-gray-600 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={back}>Back</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={calculation}>=</button>
      <button className='border m-4 w-[78px] h-[30px] rounded cursor-pointer bg-green-700 text-white hover:bg-black hover:text-white transition-all duration-200 items-center justify-center' onClick={handleButton} value="/">/</button>
    </div>

   </div>

    </div>
  )
}

export default Calculator