import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {  Router, useNavigate } from 'react-router-dom';

function Search(){
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        if(input != ""){
            navigate(`/searched/${input}`);
        }

    }
  return (
    <form className='bg-gray-50 m-3 p-0 shadow-md rounded-full overflow-hidden max-w-[400px] mx-auto flex items-center' onSubmit={submitHandler} >
        
        <input 
            type="text" value={input} 
            className='bg-gray-50 outline-none p-3 w-full' placeholder='Search any dish...' 
            onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={submitHandler} className='bg-gray-800 h-full p-4 rounded-full'>
            <FaSearch className='text-gray-50'/>
        </button>
    </form>
  )
}

export default Search