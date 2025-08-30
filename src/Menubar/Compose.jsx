import React from 'react'
import { LuPencilLine } from "react-icons/lu";
import { NavLink } from 'react-router';

export const Compose = () => {
  return (
    <NavLink to='/compose' className='bg-[#FFD93D]  px-7 py-10 mb-10 rounded-xl flex items-center justify-evenly w-3/4'>
        <LuPencilLine size={26}/>
       <h3 className='text-2xl font-bold '>Compose</h3>
    </NavLink>
  )
}
