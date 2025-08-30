import React from 'react';
import Header from './components/Header';
import Menu from './Menubar/Menu';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import InboxPages from './Pages/InboxPages';
import FavoritePages from './Pages/FavoritePages';
import DraftPages from './Pages/DraftPages';
import SentPages from './Pages/SentPages';
import ComposePages from './Pages/ComposePages';
import InboxFullMail from './FullMail/InboxFullMail';
const App = () => {
  return (
   <>
   <Header></Header>
   <div className='flex items-center justify-between  h-[27rem] '>
    <Menu></Menu>
  <div className=' w-9/12 h-9/12 mx-4  overflow-y-scroll'>
     <Routes>
    <Route path='/' element={<InboxPages/> } />
    <Route path='/inbox/:id' element={<InboxFullMail/> }/>
    <Route path='/fav' element={<FavoritePages/>}/>
    <Route path='/draft' element={<DraftPages/>}/>
    <Route path='/sent' element={<SentPages/>}/>
    <Route path='/compose' element={<ComposePages/>}/>
    
   </Routes>
  </div>
   </div>
   </>
  );
};

export default App;