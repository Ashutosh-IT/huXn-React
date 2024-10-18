import { useState } from "react";

const App = () => {

  const [input,setInput] = useState("");

  const display = (val)=>{
    setInput(input+val);
  }

  const calculate = () => {
    const ans = eval(input);
    if(ans) setInput(eval(input)); 
  }

  const clear = () => {
    setInput("");
  }

  const back = ()=> {
    if(input.length === 0) 
      return;
    let str = input;
    str = str.slice(0, -1);
    setInput(str);
  }


  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='w-[300px] border border-white flex flex-col gap-2 items-center p-2'>

        <input type="text" readOnly className='w-full h-[50px] px-[20px] text-black text-right' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <div className='w-full flex justify-between'>
          <span className='cursor-pointer h-[50px] w-[48%] bg-yellow-300 text-black flex items-center justify-center font-bold' onClick={clear}>AC</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={back}>X</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("/")}>/</span>
        </div>

        <div className='w-full flex justify-between'>
          <span className='cursor-pointer h-[50px] w-[24%] text-white border flex items-center justify-center font-bold' onClick={()=>display("7")}>7</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("8")}>8</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("9")}>9</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("*")}>*</span>
        </div>

        <div className='w-full flex justify-between'>
          <span className='cursor-pointer h-[50px] w-[24%] text-white border flex items-center justify-center font-bold' onClick={()=>display("4")}>4</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("5")}>5</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("6")}>6</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("-")}>-</span>
        </div>

        <div className='w-full flex justify-between'>
          <span className='cursor-pointer h-[50px] w-[24%] text-white border flex items-center justify-center font-bold' onClick={()=>display("1")}>1</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("2")}>2</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("3")}>3</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("+")}>+</span>
        </div>

        <div className='w-full flex justify-between'>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display("0")}>0</span>
          <span className='cursor-pointer h-[50px] w-[24%] text-white flex items-center justify-center font-bold border' onClick={()=>display(".")}>.</span>
          <span className='cursor-pointer h-[50px] w-[48%] bg-yellow-300 text-black flex items-center justify-center font-bold' onClick={calculate}>=</span>
        </div>


        
      </div>

    </div>
  )
}

export default App