import React from 'react';
import { useParams } from "react-router-dom";
import UserService from '../../services/UserService';
import '../../style/UserPage.css';
import UserPage from './UserPage';

// Must be a function component in order to use 'useParams()'.
function UserPageContainer(){
    let params = useParams();

    return(
        <div className='container'>
            <UserPage userId={params.userId}/>

        </div>
    );
}
 
export default UserPageContainer;