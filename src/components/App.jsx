import '../style/App.css'
import React from 'react';
import Header from './Header';
import CardList from './Cards/CardList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestComponent from './TestComponent';
import UserList from './Users/UserList';
import UserPageContainer from './Users/UserPageContainer';
import CreateAccountForm from './Users/CreateAccountForm';
import ExpansionList from './Expansion/ExpansionList';
import ChatRoom from './ChatRoom';


function App() {
  return (
    <Router>
      <div className='AppContainer'>
        <Header/>
        <Routes>
          <Route index element={<CardList />} />
          <Route path='card' element={<TestComponent/>} />
          <Route path='users' element={<UserList/>}/>
          <Route path='users/:userId' element={<UserPageContainer/>}/> 
          <Route path='create_account' element={<CreateAccountForm/>}/>   
          <Route path='expansions' element={<ExpansionList/>}/> 
          <Route path='chatroom' element={<ChatRoom/>}/>     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
