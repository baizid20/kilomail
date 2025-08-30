import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink } from 'react-router';
const Favorite = () => {
  return (
     <NavLink to='/fav' className='flex gap-x-2 items-center'>
           <MdFavoriteBorder/>
           <h3 className='text-lg cursor-pointer'>Favorite</h3>
       </NavLink>
  )
}

export default Favorite