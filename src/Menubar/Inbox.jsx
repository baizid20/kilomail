import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router';


const Inbox = () => {
    const navigate = useNavigate()
  return (
    <NavLink onClick={()=>navigate('/')} className='flex gap-x-2 items-center'>
        <MdMarkEmailUnread/>
        <h3 className='text-lg cursor-pointer'>Inbox</h3>
    </NavLink>
  )
}

export default Inbox