import React from 'react';
import { RiDraftLine } from "react-icons/ri";
import { useNavigate } from 'react-router';

const Draft = () => {
    const navigate = useNavigate()
    return (
         <div onClick={()=>navigate('/draft')} className='flex gap-x-2 items-center'>
               <RiDraftLine />
               <h3 className='text-lg cursor-pointer'>Draft</h3>
           </div>
    );
};

export default Draft;