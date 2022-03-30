import '../style/App.css'
import React from 'react';
import Header from './Header';
import CardList from './Cards/CardList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestComponent from './TestComponent';
import UserList from './Users/UserList';
import UserPage from './Users/UserPage';
import UserPageContainer from './Users/UserPageContainer';


function App() {
  return (
    <div className='AppContainer'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<CardList />} />
          <Route path='card' element={<TestComponent/>} />
          <Route path='users' element={<UserList/>}/>
          <Route path='users/:userId' element={<UserPageContainer/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
