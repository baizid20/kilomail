import React from 'react';
import { RiDraftLine } from "react-icons/ri";
import { NavLink } from 'react-router';

const Draft = () => {
    return (
         <NavLink to='/draft' className='flex gap-x-2 items-center'>
               <RiDraftLine />
               <h3 className='text-lg cursor-pointer'>Draft</h3>
           </NavLink>
    );
};

export default Draft;