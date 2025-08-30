import React from 'react'
import { LuPencilLine } from "react-icons/lu";
import { useNavigate } from 'react-router';

export const Compose = () => {
      const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/compose')} className='bg-[#FFD93D]  px-7 py-10 mb-10 rounded-xl flex items-center justify-evenly w-3/4'>
        <LuPencilLine size={26}/>
       <h3 className='text-2xl font-bold '>Compose</h3>
    </div>
  )
}
