import React from 'react';
import UserService from '../../services/UserService';

const LoginForm = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    tryLogin = (e) => {
        e.preventDefault();

        const userId = UserService.CheckLogin(username, password)

        if (userId == null){
            //login failed
        }
        else{
            //login succesful, add id to session and redirect
        }

    }

    ChangeNameHandler = (event) => {
        setUsername(event.target.value);
    }

    ChangePasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    return(
        <div className='container'>
            <form>
                <label for='uname'>username: </label>
                <input type='text' name='uname' id='uname'></input>
                <label for='pw'>password: </label>
                <input type='text' name='pw' id='pw'></input>
            </form>
        </div>
    );
}

export default LoginForm;