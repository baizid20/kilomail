import React from 'react';
import { Compose } from './Compose';
import Inbox from './Inbox';
import Favorite from './Favorite';
import Sent from './Sent';
import Draft from './Draft';

const Menu = () => {
    return (
        <div className='bg-amber-100 w-1/3 p-5 grid gap-y-4'>
            <Compose></Compose>
            <Inbox></Inbox>
            <Favorite></Favorite>
            <Sent></Sent>
            <Draft></Draft>
        </div>
    );
};

export default Menu;