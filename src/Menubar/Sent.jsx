import React from 'react'
import { MdFilePresent } from "react-icons/md";
import { useNavigate } from 'react-router';

const Sent = () => {
        const navigate = useNavigate()
  return (
      <div onClick={()=>navigate('/sent')} className='flex gap-x-2 items-center'>
            <MdFilePresent/>
            <h3 className='text-lg cursor-pointer'>Sent</h3>
        </div>
  )
}

export default Sent