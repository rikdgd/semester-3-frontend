import React from 'react';
import UserService from '../../services/UserService';
import AppUrls from '../../AppUrls.json';

const LoginForm = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function tryLogin(e) {
        e.preventDefault();

        const loginSucces = UserService.TryLogin(username, password)

        if (loginSucces){
            //login succesful, redirect
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
            <button onClick={tryLogin}>login</button>    
        </div>
    );
}

export default LoginForm;