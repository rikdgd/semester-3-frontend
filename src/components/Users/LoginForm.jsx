import React from 'react';
import UserService from '../../services/UserService';
import AppUrls from '../../AppUrls.json';
import SessionHandler from '../../SessionHandler';

const LoginForm = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [userId, setUserId] = React.useState();

    function tryLogin(e) {
        e.preventDefault();

        UserService.TryLogin(username, password).then((response) => {
            setUserId(response.data);
            console.log(response.data);
        });

        if (userId > 0){
            //login succesful, redirect
            SessionHandler.SetUserId(userId);
            window.location.assign(AppUrls["homepage"]);
        }
        else{
            window.alert('login failed');
        }

    }

    function ChangeNameHandler(event) {
        setUsername(event.target.value);
    }

    function ChangePasswordHandler(event) {
        setPassword(event.target.value);
    }

    return(
        <div className='container'>
            <form>
                <label for='uname'>username: </label>
                <input type='text' name='uname' id='uname' onChange={ChangeNameHandler}></input>
                <label for='pw'>password: </label>
                <input type='text' name='pw' id='pw' onChange={ChangePasswordHandler}></input>
            </form>
            <button className='btn btn-primary' onClick={tryLogin}>login</button>    
        </div>
    );
}

export default LoginForm;