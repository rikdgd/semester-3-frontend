import '../style/App.css'
import React from 'react';
import Header from './Header';
import CardList from './Cards/CardList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestComponent from './TestComponent';
import UserList from './Users/UserList';
import UserPageContainer from './Users/UserPageContainer';
import CreateAccountForm from './Users/CreateAccountForm';


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
          <Route path='create_account' element={<CreateAccountForm/>}/>         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
