import React from 'react';
import SessionHandler from '../../SessionHandler';
import '../../style/UserPage.css';
import UserPage from './UserPage';

// Must be a function component in order to use 'useParams()'.
function UserPageContainer(){
    const userId = SessionHandler.GetUserId();

    if(userId === null || userId < 0) {
        return(
            <div className='container'>
                <h3>Account not found, are you logged in?</h3>
            </div>
        );
    }

    return(
        <div className='container'>
            <UserPage userId={userId}/>
        </div>
    );
}
 
export default UserPageContainer;