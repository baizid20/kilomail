import React from 'react'
import { MdFilePresent } from "react-icons/md";
import { NavLink } from 'react-router';

const Sent = () => {
      
  return (
      <NavLink to='/sent' className='flex gap-x-2 items-center'>
            <MdFilePresent/>
            <h3 className='text-lg cursor-pointer'>Sent</h3>
        </NavLink>
  )
}

export default Sent