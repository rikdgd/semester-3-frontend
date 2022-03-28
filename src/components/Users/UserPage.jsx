import React from 'react';
import { useParams } from "react-router-dom";
import UserService from '../../services/UserService';
import '../../style/UserPage.css';


function UserPage(){
    let params = useParams();
    const user = UserService.GetById(params.userId);
    console.log(user);

    return(
        <div className='container'>
            <h4>{user.id}</h4>
            <a>{user.email}</a>
        </div>
    );
}
 
export default UserPage;