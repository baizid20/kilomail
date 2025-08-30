import React from 'react';
import { useNavigate } from 'react-router';
const FavoritePages = () => {
        const navigate = useNavigate()
    return (
        <div onClick={()=>navigate('/fav')} >
            <h1 className='text-9xl text-red-700 text-center'>This My Favorite pages</h1>
        </div>
    );
};

export default FavoritePages;