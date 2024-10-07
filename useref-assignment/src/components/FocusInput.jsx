import React, { useRef } from 'react'

const FocusInput = () => {

  const input = useRef(null);
  const handleClick = () => {
    input.current.focus();
    input.current.value = "Ashu";
  }
  return (
    <div>
        <input type="text" ref={input} placeholder='click button to focus'/>
        <button onClick={handleClick}>Ashu</button>
    </div>
  )
}

export default FocusInput