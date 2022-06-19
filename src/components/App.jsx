import '../style/App.css'
import React from 'react';
import Header from './Header';
import CardList from './Cards/CardList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestComponent from './TestComponent';
import UserPageContainer from './Users/UserPageContainer';
import CreateAccountForm from './Users/CreateAccountForm';
import ChatRoom from './ChatRoom';
import LoginForm from './Users/LoginForm';
import CollectionPage from './Collection/CollectionPage';


function App() {
  return (
    <Router>
      <div className='AppContainer'>
        <Header/>
        <Routes>
          <Route index element={<CardList />} />
          <Route path='card' element={<TestComponent/>} />
          <Route path='users' element={<UserPageContainer/>}/> 
          <Route path='login' element={<LoginForm/>}/>
          <Route path='create_account' element={<CreateAccountForm/>}/>   
          <Route path='chatroom' element={<ChatRoom/>}/>   
          <Route path='collection' element={<CollectionPage/>}/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
