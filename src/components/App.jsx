import '../style/App.css'
import React from 'react';
import Header from './Header';
import CardList from './Cards/CardList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestComponent from './TestComponent';
import UserList from './Users/UserList';
import UserPage from './Users/UserPage';
import NotFound from './NotFound';


function App() {
  return (
    <div className='AppContainer'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<CardList />} />
          <Route path='/card' element={<TestComponent/>} />
          <Route path='/users' element={<UserList/>} />
          <Route path='/user:id' element={<UserPage/>} /> 
          {/* <Route element={<NotFound/>} /> */}
        </Routes>
        {/* <Link to='/user/1'>click<Link/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
