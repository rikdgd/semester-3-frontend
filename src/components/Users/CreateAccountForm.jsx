import React, { Component } from 'react';
import UserService from '../../services/UserService';
import '../../style/CreateForm.css'
import Button from '../GeneralComponents/Button'
import AccountCreated from './AccountCreated';


class CreateAccountForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            infoSubmited: false
        }
        
        this.ChangeEmailHandler = this.ChangeEmailHandler.bind(this);
        this.ChangeUsernameHandler = this.ChangeUsernameHandler.bind(this);
        this.ChangePasswordHandler = this.ChangePasswordHandler.bind(this);

        this.CreateAccount = this.CreateAccount.bind(this);
    }

    CreateAccount = (e) => {
        e.preventDefault();
        let account = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        this.setState({
            infoSubmited: true
        })

        UserService.CreateUser(account);
    }

    ChangeEmailHandler = (event) => {
        this.setState({ email: event.target.value});
    }

    ChangeUsernameHandler = (event) => {
        this.setState({ username: event.target.value});
    }

    ChangePasswordHandler = (event) => {
        this.setState({ password: event.target.value});
    }
    
    render() { 
        const infoSubmited = this.state.infoSubmited;
        if(!infoSubmited){
            return ( 
                <div className='container form-container'>
                    <h3 className='text-center'>Register</h3>
                    <form>
                        <input type='text' className='form-control form-textfield' value={this.state.email} onChange={this.ChangeEmailHandler} placeholder='email'></input>
                        <input type='text' className='form-control form-textfield' value={this.state.username} onChange={this.ChangeUsernameHandler} placeholder='username'></input>
                        <input type='password' className='form-control form-textfield' value={this.state.password} onChange={this.ChangePasswordHandler} placeholder='password'></input>
                        <Button text='create account' onClick={this.CreateAccount}/>
                    </form>
                </div>
             );
        }
        else {
            return(
                <AccountCreated/>
            );
        }
        
    }
}
 
export default CreateAccountForm;