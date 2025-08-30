import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router';

const Favorite = () => {
    const navigate = useNavigate()
  return (
     <div onClick={()=>navigate('/fav')} className='flex gap-x-2 items-center'>
           <MdFavoriteBorder/>
           <h3 className='text-lg cursor-pointer'>Favorite</h3>
       </div>
  )
}

export default Favorite