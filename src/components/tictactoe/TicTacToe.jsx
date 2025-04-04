import React, { useState } from 'react'
import Square from './Square'
import CancelIcon from '@mui/icons-material/Cancel';
import AdjustIcon from '@mui/icons-material/Adjust';

const TicTacToe = () => {

const [num,setNum] = useState([...Array(9).fill(null)])
const [condition,setConditon]= useState(true)

const checkWinnnerFunction = ()=>{
  let winner = [
     [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
  for (let i = 0; i < winner.length; i++) {
    let [a,b,c] = winner[i];
    if(num[a] != null && num[a] === num[b] &&  num[a] === num[c]){
      return num[a]
    }
    
  }
  return false
}

const handleClick =(index)=>{
  if (num[index] !== null ){
    return;
  }
 let copyArray = [...num]
 copyArray[index] = condition ? "X": "0"
setNum(copyArray)
setConditon(!condition)
}



let result = checkWinnnerFunction();
 
const play =()=>{
  setNum([...Array(9).fill(null)])
}


  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[linear-gradient(white,purple)]">

      <h1 className="text-4xl  font-semibold bg-[linear-gradient(to_left,white,purple,white)] rounded py-2 px-10"> Tic Tac Toe  </h1>
      <h1 className='text-2xl text-red-800 font-semibold mt-5  transition-all shadow duration-100'> {condition ? "X": "0"}-- Your Turn </h1>
      { result ? 
      <div className='flex flex-col'>  <h1 className='text-6xl transition-all duration-500 animate-bounce shadow-2xl bg-[linear-gradient(white,purple)] rounded-full py-[20px] px-22 mt-16'>{result} is the winner</h1> 
      <button className="mx-auto mt-4 w-[190px] py-2 rounded-full bg-purple-800 text-white shadow-lg hover:bg-purple-950 transition-all duration-300" onClick={play}>Play Again</button> </div>

      : (<div className="flex items-center justify-center rounded-2xl bg-indigo-50 w-[500px] h-[500px] mt-6 p-6">
  <div>
    <Square onClick={()=>handleClick(0)} value={num[0]}></Square>
    <Square onClick={()=>handleClick(1)} value={num[1]}></Square>
    <Square onClick={()=>handleClick(2)} value={num[2]}></Square>
  </div>

  <div>
    <Square onClick={()=>handleClick(3)} value={num[3]}></Square>
    <Square onClick={()=>handleClick(4)} value={num[4]}></Square>
    <Square onClick={()=>handleClick(5)} value={num[5]}></Square>
  </div>

  <div >
    <Square onClick={()=>handleClick(6)} value={num[6]}></Square>
    <Square onClick={()=>handleClick(7)} value={num[7]}></Square>
    <Square onClick={()=>handleClick(8)} value={num[8]}></Square>
  </div>

    </div>)}
    
 

    </div>
  )
}

export default TicTacToe